import { IAuthPayload, ILogin } from '@/auth/types';

import { handleError } from '../handleError';
import { ApiService } from '../index';

const authService = new ApiService('/auth');

export const login = async (
  payload: ILogin
): Promise<IAuthPayload | undefined> => {
  try {
    const { data } = await authService.post<IAuthPayload>('/login', {
      ...payload,
    });
    return data;
  } catch (error) {
    handleError({
      error: error,
      defaultAxiosError: 'A autenticação falhou',
      defaultError: 'A autenticação falhou',
    });
  }
};
