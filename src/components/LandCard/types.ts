import { ILand } from '@/types';

export type ILandCard = Pick<
  ILand,
  'id' | 'images' | 'slug' | 'price' | 'landSize' | 'address'
> & {
  type?: 'infos' | 'edit';
};
