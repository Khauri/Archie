# @archie/magnet

A plugin management system for **modular** applications.

Useful when:
- You want to allow infrastructure parts of the application to be interchanged
- You want to allow extensions to an application
- You want to allow plugins to be loaded, unloaded, and updated dynamically at runtime

## Usage

```sh
bun install @archie/magnet
```

### Creating a module

Ideally a module will be its own npm package, but at the very least modules require a manifest file or a manifest section in the package.json.

`module.json`:

```json
{
    "id": "my-module",
    "name": "My Module",
    "description": "A cool module that I created",
    "tags": ["Test"],
    "entryPoint": "dist/index.js"
}
```

The module entrypoint, usually `index.js`, should have a default export of the module code.

> \***NOTE**\* Locally installed modules will use the package's `main` field instead of the `entryPoint` in the manifest.

```ts
import {createModule} from '@archie/magnet';

export default createModule();
```

### Using a module

It's advised to first define a module class definition. These definitions help to inform the module loader of the kind of modules the application will be using and gives hints as to how they might be used.

```ts
const classDefinitions = [
    {
        type: 'Database',
        singleton: true,
    }
]
```

```ts
import {createModuleLoader} from '@archie/magnet';
import {moduleClasses} from '../classes';

const loader = createModuleLoader('./modules');
loader.loadDefinitions(classDefinitions);

await loader.listModules(); // list all installed modules
await loader.listActive(); // list active modules
await loader.listInactive(); // list inactive modules

await loader.installRemote(); // installs a module fron a registry or github
await loader.installLocal(); // installs a module from a local path
await loader.install(); // calls installRemote or installLocal

await loader.load(); // load active modules
await loader.unload(); // unload all active modules

await loader.activate(); // activate a deactivated module
await loader.deactivate(); // deactivate an activated module

await loader.checkUpdates(); // check for updates to modules
```

### Activating/Deactivating

Multiple modules can have the same class/tags attached to them. In some cases you only want a single version of a module to be active at once.

### Checking for updates

If a module is installed through a registry such as npmjs, then this package will query the latest version available. 

If a module is loaded through git, then updates can be triggered by either checking the releases or by downloading the manifest file's raw data.

