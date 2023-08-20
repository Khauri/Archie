import * as p from 'path';
import * as fs from 'fs/promises';
import {existsSync} from 'fs';
import {resolveModuleType} from './module-types';
import {MagnetConfig, MagnetConfigSchema} from './config';

type PluginsJson = {
  modules?: {}
};

type Plugin<ManifestConfig> = {
  isLoaded: boolean,
  manifest: ManifestConfig,
  pkgJson: any,
  path: string,
  module?: any,
}

export class ModuleLoader<ManifestType = {}> {
  config: MagnetConfig;

  pluginsJson: PluginsJson = {};

  registry: Map<string, Plugin<ManifestType>> = new Map();

  constructor(config: MagnetConfig = {}) {
    this.config = MagnetConfigSchema.parse(config);
  }

  async init() {
    const pluginsJsonPath = p.join(this.config.dataDir, 'plugins.json');
    const pluginsJsonExists = existsSync(pluginsJsonPath);
    if(!pluginsJsonExists) {
      await fs.mkdir(this.config.dataDir, {recursive: true});
      await fs.writeFile(pluginsJsonPath, JSON.stringify({}));
    }
    await this.readPluginsJson();
  }

  private async readPluginsJson() {
    const pluginsJsonPath = p.join(this.config.dataDir, 'plugins.json');
    const pluginsJsonExists = await fs.stat(pluginsJsonPath);
    if(!pluginsJsonExists) {
      throw new Error('plugins.json does not exist');
    }
    const pluginsJson = JSON.parse(await fs.readFile(pluginsJsonPath, 'utf-8')) as PluginsJson;
    this.pluginsJson = pluginsJson;
    // Should clean this up a bit
    Object.entries((this.pluginsJson.modules || {})).forEach(([name, plugin]: [string, any]) => {
      this.registry.set(name, {
        ...this.registry.get(name),
        ...plugin,
        isLoaded: this.registry.get(name)?.isLoaded || false,
      });
    });
    return pluginsJson;
  }

  filterModules(descriminator: (plugin: Plugin<ManifestType>) => boolean) {
    return Array.from(this.registry.values()).filter(descriminator);
  }

  private async readModuleManifest(dir) {
    // Read the manifest.json
    const manifestPath = p.join(dir, 'manifest.json');
    const pkg = JSON.parse(await fs.readFile(manifestPath, 'utf-8')) as ManifestType;
    return pkg;
  }

  async installLocalModule(path: string) {
    // Pretty much symlinks the local module to the dataDir
    const exists = await fs.stat(path);
    if(!exists) {
      throw new Error(`Module path ${path} does not exist`);
    }
    // Check if the module is a directory
    if(!exists.isDirectory()) {
      throw new Error(`Module path ${path} is not a directory`);
    }
    // Look for a package.json
    const pkgPath = p.join(path, 'package.json');
    if(!(await fs.stat(pkgPath))) {
      throw new Error(`Module path ${path} does not contain a package.json`);
    }
    // Read the package.json
    const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));
    const moduleLocation = p.join(this.config.dataDir, `${pkg.name}@${pkg.version}`);
    // Remove the directory if it exists
    if(existsSync(moduleLocation)) {
      await fs.rm(moduleLocation, {recursive: true});
    }
    // Symlink the module to the dataDir
    await fs.symlink(path, moduleLocation, 'dir');
    const manifest = await this.readModuleManifest(moduleLocation);
    const plugin = {isLoaded: false, pkgJson: pkg, manifest, path: moduleLocation} as Plugin<ManifestType>;
    this.registry.set(pkg.name, plugin);
    this.pluginsJson.modules = {
      ...this.pluginsJson.modules,
      [pkg.name]: plugin
    }
    this.writePluginsJson();
    await this.load();
    return plugin;
  }

  async installGitModule() {
    // TODO
  }

  async installRemotePackage() {
    // TODO
  }

  async install(moduleIdentifier: string) {
    const type = resolveModuleType(moduleIdentifier);
    if(type.type === 'local') {
      const absPath = p.resolve(type.path);
      return this.installLocalModule(absPath);
    }
    if(type.type === 'package') {
      if(!type.namespace) {
        // Try to install from a local "repository"
        const {localRepositories} = this.config;
        const locations = localRepositories.map((repo) => p.join(repo, moduleIdentifier));
        const firstToExist = locations.find(loc => existsSync(loc));
        if(firstToExist) {
          return this.installLocalModule(firstToExist);
        }
        type.namespace = this.config.defaultNamespace;
      }
      return this.installRemotePackage()
    }
    return null;
  }

  async writePluginsJson() {
    const pluginsJsonPath = p.join(this.config.dataDir, 'plugins.json');
    // Should use a zod schema here to ensure only essentials are written
    await fs.writeFile(pluginsJsonPath, JSON.stringify(this.pluginsJson));
  }

  async load(...packages: string[]) {
    // Loads package by their name or all packages if none are specified
    if(!packages.length) {
      packages = [...this.registry.keys()];
    }
    for(const pkg of packages) {
      const plugin = this.registry.get(pkg);
      if(plugin.isLoaded) {
        continue;
      }
      const result = await import(plugin.path);
      plugin.isLoaded = true;
      plugin.module = result;
    }
  }
}

export async function createModuleLoader<T>(config: MagnetConfig = {}) {
  const loader = new ModuleLoader<T>(config);
  await loader.init();
  return loader;
}