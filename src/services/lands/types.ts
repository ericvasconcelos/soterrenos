import { ILand } from '@/types';

export interface ILands {
  data: ILand[];
  count: number;
  currentPage: number;
  lastPage: number;
  nextPage: number;
  prevPage: number;
}
