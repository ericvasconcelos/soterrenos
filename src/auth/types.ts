import { ReactNode } from 'react';

export interface IAuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  refreshToken: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
