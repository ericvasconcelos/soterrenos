import { ICreateLandPayload } from '@/pages/createAd/form/schema';
import { ILand } from '@/types';

import { ApiService } from '../index';
import { ILands } from './types';

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

export const createLand = async (payload: ICreateLandPayload) => {
  try {
    const { data } = await landsService.post('/', payload);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const updateLand = async (
  payload: Partial<ICreateLandPayload>
): Promise<ILand> => {
  const { id, ...rest } = payload;

  try {
    const { data } = await landsService.patch<ILand>(`/${id}`, rest);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const fetchLandsByUser = async (
  id?: string,
  page?: number,
  size?: number,
  active?: boolean
) => {
  const currPage = page ?? 1;
  const currSize = size ?? 1;
  const url = `/user/${id}?page=${currPage}&size=${currSize}&active=${active}`;

  try {
    const { data } = await landsService.get<ILands>(url);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const searchLands = async (url: string) => {
  try {
    const { data } = await landsService.get<ILands>(url);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
