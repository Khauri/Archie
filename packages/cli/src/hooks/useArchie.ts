import {useContext, createContext} from 'react';
import {Archie} from '@archie/core';

export const ArchieContext = createContext<Archie>();

export function useArchie(): Archie {
  return useContext(ArchieContext);
}