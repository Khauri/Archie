# Archie

Archie is an open-source archiver for thread-like websites (twitter, reddit, hackernews, youtube, tumblr, disqus), publications (articles, comics, blogs), and media (images, videos).

Archie was created for the purpose of collecting data for machine learning but can be used to generally archive any kind of public resource that has an available plugin (or you can write your own).

Archive data is saved in structured sqlite format and can be transformed into other formats.

Publically shared pre-made archives should automatically have names, handles, or other sensitive details obfuscated in a realistic manner using deterministic algorithms. Additionally, links and images are extracted and expressed in standard markdown format, with the flavor text being an image description (useful for plugging into a generative AI).

## Usage

Pre-made archives are available in the releases section of this repository. Note that these archives have most of the user information deterministically masked using [copycat](https://github.com/snaplet/copycat) and also do not contain imagery or videos, but will contain image alt text or link descriptions where available. To create custom archives without the censoring, run the tool locally.

### Installation

> Note that these steps are wishful thinking and do not currently work. Scroll down to the development section for current local running steps

The Archie cli is the main method of generating archives

Install the cli globally:

```sh
npm install -g archie
```

Install one or more archivers

```sh
# `twitter` and `reddit` will look for an npmjs.com repository package named @archie/twitter or @archie/reddit
# https://github.com/khauri/archie/archivers/twitter will download the twitter folder from the archie repo
# Relative or absolute filesystem urls (with or without a file:// prefix) will create a symlink to a local extension
archie install twitter reddit
```

To archive something, simply pass in a uri

```sh
archie "https://twitter.com/..."
```

And archie will figure out the best way of archving the URL you give it. Provide cli options for better configuration.

```sh
# Capture a youtube video from 1m20s to 1m25 seconds
archie -m "https://youtube.com/...." --from 1m20s --to 1m25s
# The plugin may also infer the time from the url. In youtube's case, if the url happens to contain the start timestamp simply use duration
archie -m "https://youtube.com/...?t=100" --duration 5s
```

Note that archie is modular and some archivers may generate requests to archive other parts of the same page, usually media.
By default, unless you use the `-m` (media) flag, media will not be downloaded.

You can enable media downloading globally like so:

```sh
archie config media on
```

If you have this enabled and you want to skip media archiving for a particlar page, use `--no-media`.

```sh
archie "https://youtube.com/...." --no-media
```

#### Archive server

Archie can also be started as a server

```sh
archie server --port 5050 --workers 3 --no-media
```

This effectively lets you queue and query archive requests using the same commands from above. You can also issue http requests to the port using cURL. In the future we may make the middleware available so that the server can be attached to an existing web application interface.


## Thread Formats

Archie includes tools useful for outputting threads in two main formats, `JSON` and a text representation of the thread.

### JSON

This can be useful for processing a thread as code and formatting it however you like. The general structure is as follows:

```js
{
    "threadId": "<url>",
    "threadSrc": "<url>",
    "parentThread": null,
    "rootThread": null,
    "threadOrigin": "twitter",
    "content": "...",
    "createdAt": "2022-12-31",
    "lastUpdatedAt": "2022-12-31",
    "edits": [],
    "numViews": null, // null when not supported
    "numComments": 1,
    "numLikes": 10,
    "numDislikes": 1, // null when not supported
    "numReactions": 11, // likes + dislikes
    "numInteractions": 12, // reactions + comments
    "author": {
        "displayName": "Dirty Dan",
        "handle": "@dirtydan",
        "userId": "@dirtydan"
    },
    "participants": [...], // users who have replied to this thread
    "metadata": {
        "links": {"link-1": {"href": "...", "host": "..."}},
        "images": {"image-1": {"src": "...", "alt": "..."}},
        "tags": {"tag-1": {"userId": "@dirtydan"}}
    },
    "replies": [
        {
            "threadId": "<url>",
            "threadSrc": "<url>",
            "parentThread": "<parent-thread-id>",
            "rootThrad": "<root-thread-id>",
            // ... etc
        }
    ],
}
```

Note that this JSON can be quite large, so the tools allow you to control the recursive depth as well.

### Text

This can be useful for generating text completion prompts

```txt
@patrick
I'm dirty dan.
| @spongebob
| No, I'm dirty dan
| | @sandy
| | Which one of you is dirty dan?
| | | @patrick
| | | [spongebob](@spongebob)
| | | @spongebob
| | | [patrick](@patrick)
@squidward
Don't you have to be stupid somewhere else?
| @patrick
| Not until 4
```

This can be configured to include metadata as well.

```txt
@squidward; likes=100;
Any questions?
| @patrick; likes=10;
| Is mayonnaise an instrument?
```

## Development

Archie is implemented as a monorepo using yarn workspaces.

First clone the repository and cd into the directory

```sh
git clone ...
cd archie
```

Then at the root of the repository install dependencies with

```sh
yarn install
```

See the [archivers](./archivers) directory for steps on creating a new archiver.

### Monorepo tricks

This repository uses yarn workspaces for monorepo management. However, it's somewhat difficult to get typescript to work correctly with a monorepo. This is a brief explanation of several tricks that were used here, mostly so that I don't forget what they are.

1. I couldn't for the life of me get workspace packages such as `@archie/core` to resolve when used in other packages such as `archie-cli`. I tried adding a `tsconfig.json` to each package that used the `references` field, but this doesn't really work because it relies on the package being built first. Since I often work on packages simultaneously, I don't want to have to rely on building the package each time I make a change. I'd rather the whole repository be treated as one big project with individually publishable pieces, so I opted to have a single `tsconfig.json` at the root of the project with some clever tricks in the `includes` field to ensure all the packages are part of the project. Most notably the `compilerOptions.paths` field is important in having typescript resolve my workspace packages correctly.

2. When working with ts-node, I again do not want to have to build a ts package just to work with it. ts-node relies on fields such as `main` and `exports` in the `package.json` to figure out which file should be loaded. Ideally, when developing locally I want the `src/index.ts` source file to be loaded, but when publishing the package I want the `dist/index.js` and `dist/index.cjs` files to be used. The solution here is to rewrite the `package.json` before it's published in the `prepack` script using [clean-package](https://www.npmjs.com/package/clean-package)

## Usage Agreement

You're prohibited from using the archivers for the purposes of creating bots or any code that replies to or otherwise interacts with any conent on the websites in which data is sourced.
