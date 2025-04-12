import { IUserType } from '@/types';

export interface IPartner {
  type: IUserType;
  variants: {
    singular: string;
    plural: string;
    article: string;
  };
}
