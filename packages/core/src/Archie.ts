import path from 'path';
import inversify from 'inversify';
import {createModuleLoader, ModuleLoader} from '@archie/magnet';
import 'urlpattern-polyfill';

import {resolveConfig, saveConfig, ArchieConfig, ConfigSchema} from './config';
import {DestinationResolverFunction, MediaArchiver, ThreadArchiver} from './Archiver';
import {CheapArchiverModules} from './services/modules';
import {parseExtractionRuleString} from './extractor';
import { Extract } from './Extract';

type ConfigOptions = {
  baseDir?: string;
}

type ArchieModule = {
  type: string,
  name: string,
  version: string,
  matches: (string | URLPatternInit)[],
  author?: string,
}

type MediaArchiveRequest = {
  type: 'media',
  from?: number,
  to?: number,
}

type ThreadArchiveRequest = {
  type: 'thread',
}

type ExtractRequest = {
  type: 'extract',
  extract: string[],
}

type ArchiveRequest = {
  source: string,
} & (MediaArchiveRequest | ThreadArchiveRequest | ExtractRequest);

// type ArchiveRequest = {
//   source: string,
//   type?: string,
//   extract?: string[],
//   options?: 
// }

export class Archie {

  moduleLoader: ModuleLoader<ArchieModule>;

  config: ArchieConfig;

  configFile: string;

  private setupContainer() {
    const container = new inversify.Container();
    container.load(CheapArchiverModules);
    return container;
  }
  
  async init(configOptions: ConfigOptions = {}) {
    const {config, configFile} = await resolveConfig({
      baseDir: configOptions.baseDir ?? '~/.archie',
    });
    this.config = config;
    this.configFile = configFile ?? '~/.archie/archie.config.json';
    this.moduleLoader = await createModuleLoader<ArchieModule>({
      dataDir: path.join(this.config.dataDir, 'plugins'),
      localRepositories: this.config.localRepositories as string[],
      defaultNamespace: '@archie'
    });
  }

  configure(config: Partial<ArchieConfig>) {
    Object.assign(this.config, ConfigSchema.parse(config));
    // Save config
    saveConfig(this.config, this.configFile);
  }

  async install(plugins: string[], onProgress) {
    for(const plugin of plugins) {
      const plug = await this.moduleLoader.install(plugin);
    }
  }

  private async handleRequest(request: ArchiveRequest) {
    if(!request.source) {
      throw new Error('Source is required');
    }
    // Kinda of an annoying issue where URLPattern doesn't like query or hash...
    const url = new URL(request.source);
    const urlWithoutQueryOrHash = `${url.origin}${url.pathname}`;

    // get modules matching the source
    const plugins = this.moduleLoader.filterModules((plugin) => {
      return plugin.manifest.matches.some((match) => {
        // Builtin types seem to be wrong here? UrlPatternInput should allow strings but doesn't
        const pattern = new URLPattern(match as any);
        return pattern.test(urlWithoutQueryOrHash as any); 
      });
    });
    if(request.type === 'extract' && request.extract) {
      plugins.push(
        {
          module: { default: Extract },
          manifest: { type: 'extract', name: 'extract', version: '0.0.1', matches: ['*'] },
          isLoaded: true,
          pkgJson: { name: '@archie/extract' },
          path: '$builtin'
        }
      );
    }

    const result = {
      files: []
    }

    for(const plugin of plugins) {
      if(!plugin.isLoaded) {
        await this.moduleLoader.load((plugin as any).pkgJson.name);
      }
      const container = this.setupContainer();
      inversify.decorate(inversify.injectable(), plugin.module.default);
      const archiverPlugin = container.resolve(plugin.module.default);
      // May separate this call later
      await (archiverPlugin as any)?.init({});

      const destination: DestinationResolverFunction = (context) => {
        const replacerValues = {
          name_hash: context.name?.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
          ...context,
          type: plugin.manifest.type?.toLowerCase(),
          date: new Date().toISOString().slice(0, 10),
          archiver: plugin.manifest.name?.toLowerCase(),
          archiverVersion: plugin.manifest.version?.toLowerCase(),
        };
        let replaced = this.config.outputPattern.replace(/\[(.+?)\]/g, (match, key) => {
          if(replacerValues[key]) {
            return replacerValues[key];
          }
          return match;
        });
        // This should always be a path relative to the data dir
        if(replaced.startsWith('/')) {
          replaced = replaced.slice(1);
        }
        const absPath = path.resolve(this.config.dataDir, replaced);
        const filename = path.basename(absPath);
        const directory = path.dirname(absPath);
        const filepath = path.join(directory, filename);
        return {filename, filepath, directory};
      }

      switch(plugin.manifest.type.toLowerCase()) {
        case 'thread':
          const archiver = archiverPlugin as ThreadArchiver;
          await archiver.archive({source: request.source});
          break;
        case 'extract':
          const extractor = archiverPlugin as any;
          // Pass to the extractor
          const rules = (request as ExtractRequest).extract.map((rule) => {
            return parseExtractionRuleString(rule);
          });
          await extractor.extract({source: request.source, rules});
          break;
        case 'media': {
          const mediaExtractor = archiverPlugin as MediaArchiver;
          const mediaArchiveResult = await mediaExtractor.archive({
            source: request.source,
            destination,
          });
          result.files.push({directory: destination({}).directory});
        } break;
        default:
          throw new Error(`Unknown module type: ${plugin.manifest.type}`);
      }
    }
    return result;
  }

  async archive(...requests: (ArchiveRequest | ArchiveRequest[])[]) {
    requests = requests.flat();
    let results = [];
    // TODO: Add requests to the queue and distribute to workers or something
    for(const request of requests) {
      try {
        const result = await this.handleRequest(request as ArchiveRequest);
        results.push({result});
      } catch (err) {
        console.error(err);
        results.push({error: err});
      }
    }
    // Combine all files together
    const newFiles = results.reduce((acc, curr) => {
      if(curr.result) {
        return [...acc, ...curr.result.files];
      }
      return acc;
    }, []);
    const errors = results.filter((result) => result.error);
    return {
      files: newFiles,
      errors,
    }
  }
}