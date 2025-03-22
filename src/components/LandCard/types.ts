import { ILand } from '@/types';

export type ILandCard = Pick<
  ILand,
  'images' | 'url' | 'price' | 'landSize' | 'address'
>;
