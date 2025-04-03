import { ILand } from '@/types';

export type ILandCard = Pick<
  ILand,
  'id' | 'images' | 'url' | 'price' | 'landSize' | 'address'
> & {
  type?: 'infos' | 'edit';
};
