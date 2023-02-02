import * as z from 'zod';
import React, {useEffect} from 'react';
import { Box, Text } from 'ink';
import {useArgs, useArchie} from '../hooks';

export const options = {
  outputType: {type: z.string(), flags: '-t, --output-type <type>', description: 'The output type'},
  extract: {type: z.array(z.string()), flags: '-e, --extract <rule>', repetable: true, description: 'An extraction rule. When supplied archiver plugins will not be used. Can be specified multiple times'}
}

function ArchiveSource({source, extract}) {
  const archie = useArchie();
  
  useEffect(() => {
    archie.archive({source, extract});
  }, []);

  return (
    <Box>
      <Text>Archiving {source}</Text>
    </Box>
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
  return <ArchiveSource source={source} extract={opts.extract} />
}