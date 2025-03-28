import { IImage } from './Image';

export type IUserType = 'agency' | 'owner' | 'salesperson';

export interface IUser {
  type: IUserType;
  email: string;
  phoneNumber: string;
  whatsappNumber?: string;
  profileImage?: IImage;
  password: string;
  confirmPassword: string;
  personalName?: string;
  personalLastName?: string;
  personalId?: string;
  legalName?: string;
  tradeName?: string;
  companyId?: string;
  creci?: string;
  creciState?: string;
}
