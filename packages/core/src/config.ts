import fs from 'fs';
import path from 'path';
import os from 'os';
import z from 'zod';

const homeDir = os.homedir();
const defaultDataDir = path.join(homeDir, '.archie');

const ConfigSchema = z.object({
  dataDir: z.string().optional().default(defaultDataDir).describe('The directory where Archie will store data and install plugins'),
});

export type ArchieConfig = z.infer<typeof ConfigSchema>;

export type ResolveConfigOptions = {
  baseDir?: string;
  configFile?: string;
}

export function findConfigFile(currPath = process.cwd()) {
  const configPath = path.join(currPath, 'archie.config.js');
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
  if(!fs.existsSync(configFilePath)) {
    throw new Error(`Could not find path ${configFilePath}`);
  }
  try {
    const file = fs.readFileSync(configFilePath).toJSON() as ArchieConfig;
    return file;
  } catch(err) {
    throw new Error(`Could not read config file ${configFilePath}. Is it formatted correctly?`);
  }
}

export async function resolveConfig({baseDir = process.cwd(), configFile}: ResolveConfigOptions): Promise<ArchieConfig> {
  // check for config file in ~/.archie
  let config: ArchieConfig;
  if(typeof configFile !== 'undefined') {
    config = readConfigFile(configFile);
  } else {
    const configFilePath = findConfigFile(baseDir);
    if(configFilePath) {
      config = readConfigFile(configFilePath);
    } else {
      config = {};
    }
  }
  return ConfigSchema.parse(config);
}