import { HttpService } from '..';
import { IZipCodeData } from './types';

const zipCodeService = new HttpService('/ws');

export const fetchZipCode = async (zipCode: string): Promise<IZipCodeData> => {
  const { data } = await zipCodeService.get<IZipCodeData>(`/${zipCode}/json/`);
  return data;
};
