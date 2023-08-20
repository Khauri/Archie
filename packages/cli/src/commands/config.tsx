import React, {useState, useEffect} from 'react';
import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';
import TextInput from 'ink-text-input';

import {useArgs, useArchie} from '../hooks';

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

const configurables = [
  {
    label: 'Archivers',
    value: 'archivers'
  }, 
  {
    label: 'Storage',
    value: {
      items: [
        {
          label: 'Data directory',
          value: 'dataDir'
        },
        {
          label: 'Local Repositories',
          value: 'localRepos'
        }
      ]
    }
  },
];

function ArchiversConfig() {
  return (
    <Text>Archivers</Text>
  )
}

export default function configure() {
  const archie = useArchie();
  const args = useArgs();
  const [curr, setCurr] = useState(configurables);
  const [value, setValue] = useState(args[1]);
  const [input, setInput] = useState('');
  const [key, setKey] = useState(args[0]);

  const onSelect = (item) => {
    if(item.value?.items) {
      setCurr(item.value.items);
    } else {
      setKey(item.value);
    }
  };

  const onEnter = (value) => {
    setValue(value);
  }

  useEffect(() => {
    if(key && value) {
      archie.configure({[key]: value});
    }
  }, [key, value]);

  // Enter the value (also should display the old value?)
  if(key && !value) {
    return (
      <>
        <Text>Enter a value for: {key}</Text>
        <TextInput value={input} onChange={setInput} onSubmit={onEnter} />
      </>
    )
  }
  // Select what you want to configure
  if(!key && !value) {
    return (
      <>
        <Text>What would you like to configure?</Text>
        <SelectInput items={curr} onSelect={onSelect} />
      </>
    )
  }
  return (
    <Text>Configuring {key} to {value}</Text>
  )
}