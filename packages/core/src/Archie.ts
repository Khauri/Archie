import path from 'path';
import inversify from 'inversify';
import {createModuleLoader, ModuleLoader} from '@archie/magnet';
import 'urlpattern-polyfill';

import {resolveConfig, ArchieConfig} from './config';
import {ThreadArchiver} from './Archiver';
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

type ArchiveRequest = {
  source: string,
  type?: string,
  extract?: string[],
}

export class Archie {

  moduleLoader: ModuleLoader<ArchieModule>;

  config: ArchieConfig;

  private setupContainer() {
    const container = new inversify.Container();
    container.load(CheapArchiverModules);
    return container;
  }
  
  async init(configOptions: ConfigOptions = {}) {
    this.config = await resolveConfig({
      baseDir: configOptions.baseDir,
    });
    this.moduleLoader = await createModuleLoader<ArchieModule>({
      dataDir: path.join(this.config.dataDir, 'plugins'),
      defaultNamespace: '@archie'
    });
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

    // get modules matching the source
    const plugins = this.moduleLoader.filterModules((plugin) => {
      return plugin.manifest.matches.some((match) => {
        // Builtin types seem to be wrong here? UrlPatternInput should allow strings but doesn't
        const pattern = new URLPattern(match as any);
        return pattern.test(request.source as any); 
      });
    });
    if(request.extract) {
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

    for(const plugin of plugins) {
      if(!plugin.isLoaded) {
        await this.moduleLoader.load((plugin as any).pkgJson.name);
      }
      const container = this.setupContainer();
      inversify.decorate(inversify.injectable(), plugin.module.default);
      const archiverPlugin = container.resolve(plugin.module.default);
      switch(plugin.manifest.type.toLowerCase()) {
        case 'thread':
          const archiver = archiverPlugin as ThreadArchiver;
          await archiver.archive({source: request.source});
          break;
        case 'extract':
          const extractor = archiverPlugin as any;
              // Pass to the extractor
          const rules = request.extract.map((rule) => {
            return parseExtractionRuleString(rule);
          });
          const result = await extractor.extract({source: request.source, rules});
          console.log(result);
          break;
        default:
          throw new Error(`Unknown module type: ${plugin.manifest.type}`);
      }
    }
    // Remove this later
    process.exit();
  }

  async archive(...requests: (ArchiveRequest | ArchiveRequest[])[]) {
    requests = requests.flat();
    // TODO: Add requests to the queue and distribute to workers or something
    for(const request of requests) {
      this.handleRequest(request as ArchiveRequest);
    }
  }
}