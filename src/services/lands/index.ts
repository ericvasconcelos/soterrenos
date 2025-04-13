import { ILand } from '@/types';

import { ApiService } from '../index';

const landsService = new ApiService('/lands');

export const fetchLands = async (size?: number) => {
  try {
    const { data } = await landsService.get<ILand[]>(
      `/${size ? '?size=' + size : ''}`
    );
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const fetchLand = async (id?: string) => {
  try {
    const { data } = await landsService.get<ILand>(`/${id}`);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
