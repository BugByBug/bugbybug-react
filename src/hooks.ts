import { useContext } from 'react';
import { BugByBugContext } from './context';
import { Client } from '@bugbybug/browser';

export function useBugByBug(): Client | undefined {
  const context = useContext(BugByBugContext);
  
  if (context === undefined) {
    console.warn('useBugByBug must be used within a BugByBugProvider');
    return undefined;
  }
  
  return context.client;
}