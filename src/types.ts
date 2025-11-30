import { ReactNode } from 'react';
import { BugByBugConfig as BrowserConfig } from '@bugbybug/browser';

export interface BugByBugProviderProps {
  apiKey: string;
  config?: Omit<BrowserConfig, 'apiKey'>;
  children: ReactNode;
}

export interface ErrorBoundaryProps {
  children: ReactNode;

  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  
  onError?: (error: Error, componentStack: string) => void;

  beforeSend?: (error: Error, componentStack: string) => Error | null;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}