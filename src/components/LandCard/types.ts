import { ILand } from '@/types';

export type ILandCard = Pick<
  ILand,
  'code' | 'images' | 'url' | 'price' | 'landSize' | 'address'
> & {
  type?: 'infos' | 'edit';
};
