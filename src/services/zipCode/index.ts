import axios from 'axios';
import { IZipCodeData } from './types';

export const fetchZipCode = async (zipCode: string): Promise<IZipCodeData> => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  return data;
};
