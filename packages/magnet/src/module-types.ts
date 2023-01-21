import * as z from 'zod';
import * as fs from 'fs';
import * as p from 'path';

export const RemoteModule = z.object({
  type: z.literal('remote'),
  href: z.string(),
});

export const LocalModule = z.object({
  type: z.literal('local'),
  path: z.string(),
});

export const GitModule = RemoteModule.extend({
  type: z.literal('git'),
});

export const PackageModule = z.object({
  type: z.literal('package'),
  namespace: z.string().nullable(),
  pkgName: z.string(),
});

export const ModuleTypeSchema = z.discriminatedUnion('type', [RemoteModule, LocalModule, GitModule, PackageModule]);

export type ModuleType = z.infer<typeof ModuleTypeSchema>;

export function isGitURL(url: string) {
  const {protocol, hostname} = new URL(url);
  return ['git', 'github', 'gitlab', 'bitbucket'].includes(protocol) 
    || ['github.com', 'gitlab.com', 'bitbucket.org'].includes(hostname);
}

export function isLocalPath(path: string) {
  if(path.startsWith('file://')) {
    return true;
  }
  if(fs.existsSync(path)) {
    return true;
  }
  return false;
}

/**
 * Given a module string, resolves the module type
 */
export function resolveModuleType(input: string): ModuleType {
  if(isLocalPath(input)) {
    return {type: 'local', path: input.replace(/^file:\/\//, '')};
  }
  // check if string starts with a protocol
  if(/^[a-z]+:\/\//.test(input)) {
    if(isGitURL(input)) {
      return {type: 'git', href: input};
    }
    return {type: 'remote', href: input};
  }
  // Assume it's a remote package at this point
  const [namespace, pkgName = namespace] = input.split('/');
  return {
    type: 'package', 
    namespace: namespace === pkgName ? null : namespace, 
    pkgName,
  };
}
