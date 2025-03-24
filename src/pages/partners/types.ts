import { IBasePartner } from '@/types';

export interface IPartner<T extends IBasePartner> {
  data: T[];
  variants: {
    singular: string;
    plural: string;
    article: string;
  };
}
