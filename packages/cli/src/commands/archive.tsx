import * as z from 'zod';
import React, {useEffect} from 'react';
import { Box, Text } from 'ink';
import {useArgs, useArchie} from '../hooks';

export const options = {
  outputType: {type: z.string()}
}

function ArchiveSource({source}) {
  const archie = useArchie();
  
  useEffect(() => {
    archie.archive({source});
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
  return <ArchiveSource source={source} />
}