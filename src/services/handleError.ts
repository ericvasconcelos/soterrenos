import { isAxiosError } from 'axios';

import { IHandleError } from './types';

const apiErrors: Record<string, string> = {
  INVALID_PASSWORD: 'Senha inválida',
  USER_NOT_FOUND: 'Usuário não encontrado',
  LAND_NOT_FOUND: 'Terreno não encontrado',
  DONT_HAVE_PERMISSION: 'Usuário sem permisão',
  EMAIL_ALREADY_REGISTERED: 'Email já registrado',
  FILE_SMALL: 'Arquivo pequeno',
  INVALID_FILE_TYPE: 'Tipo de arquivo inválido',
  INVALID_USER_TYPE: 'Tipo de usuário inválido',
  UPLOAD_FILES_FAILED: 'O carregamento dos arquivos falharam',
  UNAUTHORIZED: 'Usuário não autorizado',
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
