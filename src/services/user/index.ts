import { ISignUpForm, IUser } from '@/types';

import { handleError } from '../handleError';
import { ApiService } from '../index';

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

// Função auxiliar para transformar os dados do formulário
const transformUserData = (formData: ISignUpForm) => {
  const baseData = {
    type: formData.type,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    whatsappNumber: formData.whatsappNumber,
    password: formData.password,
  };

  switch (formData.type) {
    case 'owner':
      return {
        ...baseData,
        personalFirstName: formData.personalFirstName,
        personalLastName: formData.personalLastName,
        personalId: formData.personalId,
      };

    case 'salesperson':
      return {
        ...baseData,
        personalFirstName: formData.personalFirstName,
        personalLastName: formData.personalLastName,
        personalId: formData.personalId,
        creci: formData.creci,
        creciState: formData.creciState,
      };

    case 'agency':
      return {
        ...baseData,
        legalName: formData.legalName,
        tradeName: formData.tradeName,
        companyId: formData.companyId,
      };

    default:
      throw new Error('Tipo de usuário inválido');
  }
};
