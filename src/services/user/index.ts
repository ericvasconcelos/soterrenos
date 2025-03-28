// import { ApiService } from '../index';
// const userService = new ApiService('/user')

import axios from 'axios';

import { IUser, IUserType } from '@/types';

export const getUser = async (type: IUserType): Promise<IUser> => {
  try {
    // const { data } = await userService.get('me');
    const { data } = await axios.get(`/json/${type}.json`);
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
};
