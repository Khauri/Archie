import * as z from 'zod';
import React, {useEffect, useState} from 'react';
import {Box, Text} from 'ink';
import {useArgs, useArchie} from '../hooks';
import {execPromise} from '../utils';

export const options = {
  outputType: {type: z.string(), flags: '-t, --output-type <type>', description: 'The output type'},
  extract: {type: z.array(z.string()), flags: '-e, --extract <rule>', repetable: true, description: 'An extraction rule. When supplied archiver plugins will not be used. Can be specified multiple times'},
  open: {type: z.boolean(), flags: '-o, --open', description: 'Open the archive after creation'},
}

function ArchiveSource({source, extract, type, open}) {
  const archie = useArchie();
  const [isDone, setIsDone] = useState(false);
  
  useEffect(async () => {
    const archiveOptions: any = {source, extract, type};
    const result = await archie.archive(archiveOptions);
    if(open) {
      const directories = [...new Set<string>(result.files.map((file) => file.directory))];
      // call open on each directory
      for(const directory of directories) {
        const result = await execPromise(`open ${directory}`);
        console.log(result);
      }
    }
    setIsDone(true);
  }, []);

  return (
    <>
      <Box>
        <Text>Archiving {source}</Text>
      </Box>
      {isDone && <Text>Done</Text>}
    </>
  )
}

export default function archive(opts: Options<typeof options>) {
  const [source] = useArgs();
  if(!source) {
    return (
      <Box>
        <Text>Please specify a source</Text>
      </Box>
    )
  }
  return <ArchiveSource 
    source={source} 
    extract={opts.extract}
    open={opts.open}
    type={undefined} 
  />
}