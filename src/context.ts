import { createContext } from 'react';
import { Client } from '@bugbybug/browser';

export interface BugByBugContextValue {
  client: Client | undefined;
}

export const BugByBugContext = createContext<BugByBugContextValue>({
  client: undefined,
});