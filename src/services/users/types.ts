import { IUser } from '@/types';

export interface IUsers {
  data: IUser[];
  count: number;
  currentPage: number;
  lastPage: number;
  nextPage: number;
  prevPage: number;
}
