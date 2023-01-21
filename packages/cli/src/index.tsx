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

function App({Command, args}) {
  const [instance, setInstance] = useState<Archie>()
  useEffect(async () => {
    const result = await initArchie();
    setInstance(result);
  }, []);
  if(!instance) return null;
  return (
    <ArgsContext.Provider value={args}>
      <ArchieContext.Provider value={instance}>
        {instance && <Command />}
      </ArchieContext.Provider>
    </ArgsContext.Provider>
  )
}

// Initialize commands
Object.entries(commands).forEach(([name, def]) => {
  const command = new Command(name);
  command.action(() => {
    const args = command.args;
    render(<App Command={def.default} args={args} />);
  });
  program.addCommand(command, {isDefault: name === 'archive'});
});


program.parse()