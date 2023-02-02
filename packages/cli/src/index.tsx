import React, {useEffect, useState} from 'react';
import * as z from 'zod';
import {render} from 'ink';
import {Archie} from '@archie/core';
import {Command, program} from 'commander';
import {ArchieContext} from './hooks/useArchie';
import {ArgsContext} from './hooks';
import * as commands from './commands';

declare global {
  type Options<T extends object> = { 
    [K in keyof T]: T[K] extends { type: z.ZodTypeAny } ? z.infer<T[K]['type']> : never;
  };
}

async function initArchie() {
  const instance = new Archie();
  await instance.init({});
  return instance;
}

function App({Command, args, opts}) {
  const [instance, setInstance] = useState<Archie>()
  useEffect(async () => {
    const result = await initArchie();
    setInstance(result);
  }, []);
  if(!instance) return null;
  return (
    <ArgsContext.Provider value={args}>
      <ArchieContext.Provider value={instance}>
        {instance && <Command {...opts} />}
      </ArchieContext.Provider>
    </ArgsContext.Provider>
  )
}

function collect(value, previous = []) {
  return previous.concat([value]);
}

// Initialize commands
Object.entries(commands).forEach(([name, def]) => {
  const command = new Command(name);
  const {options} = def as any;
  if(options) {
    for(const key in options) {
      const option = options[key];
      const {flags = `--${key}`, description = ''} = option;
      command.option(flags, description, option.repetable ? collect : undefined);
    }
  }
  command.action(() => {
    const args = command.args;
    const options = command.opts();
    render(<App Command={def.default} args={args} opts={options} />);
  });
  program.addCommand(command, {isDefault: name === 'archive'});
});


program.parse()