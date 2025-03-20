// src/services/zipCode/index.ts
import axios from 'axios';

import { VIA_CEP_API_URL } from '../../envs';
import { IZipCodeData } from './types';

export const fetchZipCode = async (zipCode: string): Promise<IZipCodeData> => {
  try {
    const response = await axios.get<IZipCodeData | { erro: boolean }>(
      `${VIA_CEP_API_URL}/ws/${zipCode}/json/`
    );

    if ('erro' in response.data) {
      throw new Error('CEP não encontrado');
    }

    return response.data as IZipCodeData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Erro na busca do CEP');
    }
    throw error;
  }
};
