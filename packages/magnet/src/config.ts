import * as z from 'zod';
import * as path from 'path';
import * as os from 'os';

const defaultRootDir = path.join(os.homedir(), '.magnet');

export const MagnetConfigSchema = z.object({
  dataDir: z.string().default(defaultRootDir),
  defaultNamespace: z.string().optional(),
  pkgInstallCommand: z.string().default('npm install $pkg')
});

export type MagnetConfig = z.infer<typeof MagnetConfigSchema>;
