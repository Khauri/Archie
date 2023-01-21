import {describe, it, beforeEach, TestContext} from 'vitest';
import * as fs from 'fs/promises';
import * as os from 'os';
import * as path from 'path';
import {createModuleLoader} from '../src';

describe('installation', () => {
  // create a temporary directory for each test
  beforeEach(async (ctx: TestContext) => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'magnet-'));
    (ctx as any).tempDir = tempDir;
    return async () => {
      await fs.rm(tempDir, {recursive: true});
    };
  });

  it('should load a local module', async (ctx: TestContext) => {
    const loader = createModuleLoader({dataDir: (ctx as any).tempDir});
    await loader.install('./tests/modules/basic');
  });
});