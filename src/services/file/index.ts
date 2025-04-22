import { ApiService } from '..';
import { handleError } from '../handleError';
import { IFile } from './types';

const filesService = new ApiService('/files');

export const uploadFile = async (file: File): Promise<IFile | undefined> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const { data } = await filesService.post<IFile>('/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    handleError({
      error,
      defaultAxiosError: 'Erro ao subir a imagem',
      defaultError: 'Erro desconhecido ao subir a imagem',
    });
  }
};

export const deleteFile = async (fileName: string) => {
  try {
    const { data } = await filesService.delete(`/${fileName}`);
    return data;
  } catch (error) {
    handleError({
      error,
      defaultAxiosError: 'Erro ao deletar imagem',
      defaultError: 'Erro desconhecido ao deletar imagem',
    });
  }
};
