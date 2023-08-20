import React, {useEffect, useState} from 'react';
import {Text} from 'ink';
import {useArgs, useArchie} from '../hooks';

/**
 * Examples:
 * archie install twitter
 * archie install https://github.com/archie/twitter
 * archie install ./path/to/twitter
 */

function Installer({packages}) {
  const archie = useArchie();
  const [progress, setProgress] = useState({});
  useEffect(() => {
    // TODO: this should probably return a stream for stdout
    archie.install(packages, (progress) => {setProgress(progress)});
  }, []);
  return (
    <>
      <Text>Installing {packages.join(', ')}</Text>
    </>
  );
}

export default function Install() {
  const packages = useArgs();
  
  if(!packages.length) {
    return <Text>Please specify a package to install</Text>
  }
  return <Installer packages={packages} />
}