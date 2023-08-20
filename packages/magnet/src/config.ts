import * as z from 'zod';
import * as path from 'path';
import * as os from 'os';

const defaultRootDir = path.join(os.homedir(), '.magnet');

export const MagnetConfigSchema = z.object({
  dataDir: z.string().default(defaultRootDir),
  localRepositories:  z.array(z.string()).or(z.string())
    .default([])
    .transform((val) => {
      if(typeof val === 'string') {
        return val.split(',');
      }
      return val;
    }),
  defaultNamespace: z.string().optional(),
  pkgInstallCommand: z.string().default('npm install $pkg')
});

export type MagnetConfig = z.infer<typeof MagnetConfigSchema>;
