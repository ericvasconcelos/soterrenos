import { IUserType } from '@/types';

import { ApiService } from '../index';
import { IUsers } from './types';

const usersService = new ApiService('/users');

export const fetchUsersByType = async (
  type: IUserType,
  page?: number,
  size?: number
) => {
  const currPage = page ?? 1;
  const currSize = size ?? 1;
  const url = `/type/${type}?page=${currPage}&size=${currSize}`;

  try {
    const { data } = await usersService.get<IUsers>(url);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
