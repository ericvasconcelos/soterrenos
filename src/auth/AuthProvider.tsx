import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { ApiService } from '@/services';

import { AuthContext } from './AuthContext';
import { isValidToken } from './helpers';
import { useLogin } from './hooks';
import { IAuthProviderProps, ILogin } from './types';

const loggedPaths = ['/entrar', '/cadastrar'];

const authService = new ApiService('/auth');

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { mutateAsync: loginRequest } = useLogin();

  const initAuth = useCallback(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken && isValidToken(storedToken)) {
      setToken(storedToken);

      if (loggedPaths.includes(window.location.pathname)) {
        navigate('/');
      }
    }
    setLoading(false);
  }, [navigate]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const login = useCallback(
    async (payload: ILogin) => {
      const data = await loginRequest(payload);

      if (!data?.accessToken || !data?.refreshToken) {
        throw new Error('O Login falhou');
      }

      const { accessToken, refreshToken } = data;
      if (!isValidToken(accessToken)) throw new Error('Token Inválido');
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setToken(accessToken);
      navigate('/meus-anuncios/ativos');
    },
    [loginRequest, navigate]
  );

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
    localStorage.removeItem('refreshToken');
    setToken(null);
    queryClient.invalidateQueries({ queryKey: ['user-me'] });
    queryClient.invalidateQueries({ queryKey: ['landsByUSer'] });
    toast.success('Usuário deslogado com sucesso!');
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
