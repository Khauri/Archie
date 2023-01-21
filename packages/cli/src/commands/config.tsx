import React from 'react';
import {Box, Text} from 'ink';

/**
 * Examples:
 * archie config
 *  Select what would you like to configure?
 *  > archivers
 *    > twitter
 *  > data directory
 * 
 * archie config twitter.uri https://api.twitter.com/1.1 twitter.token xxxx
 * 
 * archie config data-dir /path/to/data
 * 
 * archie config twitter.uri # returns current config
 */

const configurables = {
  archivers: {
    label: 'Archivers',
    options: {
      // Dynamically listed from archie.listArchivers()
    }
  },
  dataDirectory: {
    label: 'Data Directory',
  }
}

function ArchiversConfig() {
  return (
    <Text>Archivers</Text>
  )
}

export default function configure() {
  // TODO: const args = useArgs();
  return (
    <Text>What would you like to configure?</Text>
  )
}