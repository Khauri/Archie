import {useContext, createContext} from 'react';

export const ArgsContext = createContext<string>();

export function useArgs() {
  return useContext(ArgsContext);
}