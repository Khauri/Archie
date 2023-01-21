import path from 'path';
import {createModuleLoader, ModuleLoader} from '@archie/magnet';
import 'urlpattern-polyfill';
import {resolveConfig, ArchieConfig} from './config';
import {ThreadArchiver} from './Archiver';

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
}

export class Archie {

  moduleLoader: ModuleLoader<ArchieModule>;

  config: ArchieConfig;
  
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
    // get modules matching source
    const plugins = this.moduleLoader.filterModules((plugin) => {
      return plugin.manifest.matches.some((match) => {
        // Builtin types seem to be wrong here? UrlPatternInput should allow strings but doesn't
        const pattern = new URLPattern(match as any);
        return pattern.test(request.source as any); 
      });
    });
    for(const plugin of plugins) {
      if(!plugin.isLoaded) {
        await this.moduleLoader.load((plugin as any).pkgJson.name);
      }
      switch(plugin.manifest.type.toLowerCase()) {
        case 'thread':
          const archiver = new (plugin.module.default as any)() as ThreadArchiver;
          archiver.archive({source: request.source});
          break;
        default:
          throw new Error(`Unknown module type: ${plugin.manifest.type}`);
      }
    }
  }

  async archive(...requests: (ArchiveRequest | ArchiveRequest[])[]) {
    requests = requests.flat();
    // TODO: Add requests to the queue and distribute to workers or something
    for(const request of requests) {
      this.handleRequest(request as ArchiveRequest);
    }
  }
}