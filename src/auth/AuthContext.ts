import { createContext } from 'react';

import { IAuthContextType } from './types';

export const AuthContext = createContext<IAuthContextType>(
  {} as IAuthContextType
);
