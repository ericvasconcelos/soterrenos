import { ApiService } from '../index';
import { ILocations } from './types';

const locationsService = new ApiService('/locations');

export const fetchLocations = async () => {
  try {
    const { data } = await locationsService.get<ILocations[]>('/');
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
