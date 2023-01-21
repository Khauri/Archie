# Archie Command Line Interface (CLI)

The Archie cli enables you to install archivers and archive websites and media.

For programatic access, install and use `@archie/core`. 

## Usage

Install an archiver for the site you're interesting in archiving. 

### Development

It's a lot easier to test changes to the cli when the command is available in your PATH and can be executed from a terminal directly.

To do so, first install `ts-node` globally. This package is used to transpile the typescript source files on-the-fly and needs to 

```sh
npm i -g ts-node
```

Inside the folder for this package, run this command

```sh
npm link
```

Now you should be able to use `archie-dev` from the command line.