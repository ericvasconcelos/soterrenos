import { ILand } from '@/types';

import { ApiService } from '../index';

const landsService = new ApiService('/lands');

export const fetchLands = async (city?: string): Promise<ILand[]> => {
  if (!city) return [];

  try {
    const { data } = await landsService.get<ILand[]>('/');
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
