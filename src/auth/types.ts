import { ReactNode } from 'react';

export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthPayload {
  refreshToken: string;
  accessToken: string;
}

export interface IAuthContextType {
  token: string | null;
  login: (payload: ILogin) => Promise<void>;
  refreshToken: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
