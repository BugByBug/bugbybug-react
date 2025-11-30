import React, { useEffect, useRef, useState } from 'react';
import { init, Client } from '@bugbybug/browser';
import { BugByBugProviderProps } from './types';
import { BugByBugContext } from './context';

export const BugByBugProvider: React.FC<BugByBugProviderProps> = ({ 
  apiKey, 
  config = {}, 
  children 
}) => {
  const [client, setClient] = useState<Client | undefined>(undefined);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      const clientInstance = init({
        apiKey,
        ...config
      });
      setClient(clientInstance);
      initialized.current = true;
    }
  }, [apiKey, config]);

  return (
    <BugByBugContext.Provider value={{ client }}>
      {children}
    </BugByBugContext.Provider>
  );
};