import { ISignUpForm, IUser } from '@/types';

import { handleError } from '../handleError';
import { ApiService } from '../index';
import { transformUserData } from './helpers';

const userService = new ApiService('/users');

export const getUser = async (): Promise<IUser> => {
  try {
    const { data } = await userService.get<IUser>('/me');
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const signUpUser = async (userData: ISignUpForm) => {
  try {
    const payload = transformUserData(userData);
    const { data } = await userService.post('/', payload);
    return data;
  } catch (error) {
    handleError({
      error,
      defaultAxiosError: 'Erro ao cadastrar usuário',
      defaultError: 'Erro desconhecido ao cadastrar usuário',
    });
  }
};

export const updateProfile = async (userData: Partial<ISignUpForm>) => {
  try {
    const payload = transformUserData(userData);
    const { data } = await userService.patch(`/${userData.id}`, payload);
    return data;
  } catch (error) {
    handleError({
      error,
      defaultAxiosError: 'Erro ao atualizar perfil',
      defaultError: 'Erro desconhecido ao atualizar perfil',
    });
  }
};

export const uploadProfileImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', file.name);

    const { data } = await userService.post('/upload-profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    handleError({
      error,
      defaultAxiosError: 'Erro ao subir imagem',
      defaultError: 'Erro ao subir imagem',
    });
  }
};
