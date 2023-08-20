import fs from 'fs';
import path from 'path';
import os from 'os';
import z from 'zod';

const homeDir = os.homedir();
const defaultDataDir = path.join(homeDir, '.archie');

export const ConfigSchema = z.object({
  dataDir: z.string().optional().default(defaultDataDir).describe('The directory where Archie will store data and install plugins'),
  localRepositories: z.array(z.string()).or(z.string()).optional().default([]).describe('A list of absolute paths to local repositories to search for plugins when installing'),
});

export type ArchieConfig = z.infer<typeof ConfigSchema>;

export type ResolveConfigOptions = {
  baseDir?: string;
  configFile?: string;
}

function expandHomeDir(filePath: string) {
  if(filePath.startsWith('~')) {
    return path.join(homeDir, filePath.slice(1));
  }
  return filePath;
}

export function findConfigFile(currPath = process.cwd()) {
  const absPath = path.resolve(expandHomeDir(currPath));
  const configPath = path.join(absPath, 'archie.config.json');
  if(fs.existsSync(configPath)) {
    return configPath;
  }
  const parentPath = path.dirname(currPath);
  if(parentPath === currPath) {
    return null;
  }
  return findConfigFile(parentPath);
}

function readConfigFile(configFilePath: string) {
  const absPath = path.resolve(expandHomeDir(configFilePath));
  if(!fs.existsSync(absPath)) {
    throw new Error(`Could not find path ${absPath}`);
  }
  try {
    return JSON.parse(fs.readFileSync(absPath, 'utf-8'));
  } catch(err) {
    throw new Error(`Could not read config file ${configFilePath}. Is it formatted correctly?`);
  }
}

export async function resolveConfig({baseDir = process.cwd(), configFile}: ResolveConfigOptions): Promise<{config: ArchieConfig, configFile: string}> {
  // check for config file in ~/.archie
  let config: ArchieConfig;
  if(typeof configFile === 'undefined') {
    configFile = findConfigFile(baseDir);
  }
  if(!configFile) {
    return {configFile: null, config: ConfigSchema.parse({})};
  }
  config = readConfigFile(configFile);
  return {configFile, config: ConfigSchema.parse(config)};
}

export async function saveConfig(config: ArchieConfig, configFilePath: string) {
  // Create config file if it doesn't exist
  const absPath = path.resolve(expandHomeDir(configFilePath));
  if(!fs.existsSync(configFilePath)) {
    // console.log(path.dirname(configFilePath));
    fs.mkdirSync(path.dirname(absPath), {recursive: true});
  }
  fs.writeFileSync(absPath, JSON.stringify(config, null, 2));
}