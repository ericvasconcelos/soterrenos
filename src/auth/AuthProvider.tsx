import { useCallback, useEffect, useState } from 'react';

import { ApiService } from '@/services';

import { AuthContext } from './AuthContext';
import { isValidToken } from './helpers';
import { IAuthProviderProps } from './types';

const loggedPaths = ['/entrar', '/cadastrar'];

const authService = new ApiService('/auth');

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const initAuth = useCallback(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken && isValidToken(storedToken)) {
      setToken(storedToken);

      if (loggedPaths.includes(window.location.pathname)) {
        window.location.href = '/';
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const login = useCallback(async (email: string, password: string) => {
    const { data } = await authService.post<{ accessToken: string }>('/login', {
      email,
      password,
    });

    const { accessToken } = data;
    if (!accessToken) throw new Error('Login failed');
    if (!isValidToken(accessToken)) throw new Error('Invalid token');
    localStorage.setItem('accessToken', accessToken);
    setToken(accessToken);
    window.history.back();
  }, []);

  const refreshToken = async () => {
    try {
      const {
        data: { accessToken },
      } = await authService.post<{ accessToken: string }>('/refresh');
      localStorage.setItem('accessToken', accessToken);
      setToken(accessToken);
      return accessToken;
    } catch (error) {
      logout();
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        refreshToken,
        logout,
        isAuthenticated: !!token,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
