import { isAxiosError } from 'axios';

import { IHandleError } from './types';

const apiErrors: Record<string, string> = {
  INVALID_PASSWORD_USER: 'Usuário ou senha inválida',
  USER_NOT_FOUND: 'Usuário não encontrado',
  LAND_NOT_FOUND: 'Terreno não encontrado',
  EMAIL_ALREADY_REGISTERED: 'Email já foi registrado',
  FILE_SMALL: 'Arquivo pequeno',
  INVALID_FILE_TYPE: 'Tipo de arquivo inválido',
  INVALID_USER_TYPE: 'Tipo de usuário inválido',
  UPLOAD_FILES_FAILED: 'Upload de arquivo(s) falhou',
  UNAUTHORIZED: 'Não autorizado',
  PERMISSION_DENIED: 'Você não tem persmissão',
  FILE_NOT_FOUND: 'Imagem não encontrada',
  DELETE_FILE_FAILED: 'A imagem não foi deletada',
};

export const handleError = ({
  error,
  defaultAxiosError,
  defaultError,
}: IHandleError) => {
  if (isAxiosError(error)) {
    throw new Error(
      apiErrors[error.response?.data?.message] ||
        error.message ||
        defaultAxiosError
    );
  }

  if (error instanceof Error) {
    throw new Error(error.message);
  }

  throw new Error(defaultError);
};
