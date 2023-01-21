# Archivers

These are the built-in thread archivers. 
The archivers abide by the website's ToS as well as legal regulations, which generally means abiding by the `robots.txt` as well as only archiving publically available data.

### Adding a new archiver

New archivers should be added to the `archivers` directory.
In general a archiver is a mini js lib that exports a class conforming matching the archiver interface.

There are two types of archivers, `ThreadArchiver` and `MediaArchiver`. A MediaArchiver's sole purposes is to resolve the media in a thread

It is preferable to use typescript during development. In a new directory copy-and-pase the following into a `package.json` file.

```json
{
  "name": "@archie/<my-pkg-name>",
  "version": "0.0.1",
  "scripts": {
    "build": "",
    "link": "archie install .",
    "unlink": "archie uninstall ."
  },
  "files": ["dist"],
  "dependencies": {
    "@archie/core": "*",
    "@archie/magnet": "*"
  },
  "devDependencies": {
    "archie": "*",
    "@swc/core": "^1.3.26",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4",
    "vitest": "^0.27.1"
  }
}
```

Next create a new file at `src/index.ts`. The following is a very basic archiver for [Hacker News](https://news.ycombinator.com/).

```ts
import {ThreadArchiver} from '@archie/core';

export default class HNArchiver implements ThreadArchiver {

}
```

### Testing

There are a few ways to test your program. 

#### Using the archie cli

The archie cli can be used for manual testing and debugging. 

It can be installed locally in the project as a `devDependency`. ie `npm install -D archie`, or globally using `npm install -g archie`.

Link your current project using:

```sh
archie install ./path/to/project
```

If this command is successful you can now run typical `archie` commands.

```sh
archie archive "https://news.ycombinator.com/item?id=34379109"
```

#### Using a testing library

A test runner such as vitest or jest can be used.

```js
import {Archiver} from '@archie/core';
import myArchiver from '../src/index.ts'; // your archiver code
import manifest from '../package.json'; // convenience

const archiver = new Archiver({database: null});
archiver.install(myArchiver, manifest);

it('archives a thread', async () => {
  const result = await archiver.archive({uri: "https://news.ycombinator.com/item?id=34379109"});
  // Test for certain values in archie archives
  archiver.getThread('...');
});
```

This can be helpful to test if the archiver still works for a given websites. Archivers may break, for example, due to a website's html or url structure changing.

Be mindful that when testing on live websites, tests should be written in a robust way that doesn't make too many assumptions about the content of the website or its ordering. Threads can be deleted or removed. If you can, try testing on posts that you have control over.

### Services

Archivers will often utilize a few dependency injected services. To make the service available to your plugin, import the service from `@archie/core` and inject it into your archiver

#### BrowserAgent

The browser agent will contain an instance of puppeteer while the http agent will contain an instance of superagent. The HttpAgent is most useful for interacting with unpublished REST or GraphQL apis or server-rendered websites whereas the browser agent is useful for websites that require additional steps to get the data. The HttpAgent is more lightweight and therefor faster and should be used whenever possible. In some cases you might start with the BrowserAgent and then transfer cookies to the HttpAgent for faster processing. 


```ts
import {BrowserAgent, HttpAgent, ThreadArchiver} from '@archie/core';

export default class TwitterThreadArchiver implements ThreadArchiver {
    constructor(browser: BrowserAgent, http: HttpAgent) {
      // ...
    }
    // TODO: Implement required methods from ThreadArchiver
}
```

Another highly used service will be the request queueing service. If you need to do something that you would like to be throttled by the user's settings, for example making a series of http requests, then use the throttle service. This service will attempt to run the provided function according to specific rules and priorities.

```ts
import {Throttler, HttpAgent} from '@archie/core';

export default class TwitterThreadArchiver implements ThreadArchiver {
    constructor(throttler: Throttler, http: HttpAgent) {
        // ...
    }

    getUserData() {
        return throttler.queue(() => this.http.get('/user'));
    }

    getThread(url) {
        // typical archiving stuff ...
        const user = await this.getUserData();
    }
}
```

For convenience, the HttpAgent and BrowserAgent both expose a `throttled` property.

```ts
this.http.throttled.get('/user');
```

Which can also be called as a function in order to pass in additional configuration

```ts
this.http.throttled({limiterKey: 'http', maxRps: 3}).get('/user');
```

### Publishing the archiver

When creating an archiver do ensure that `@archie/core` is _not_ bundled, while any other dependencies _are_ bundled.