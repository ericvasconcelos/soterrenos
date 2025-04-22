import { IAddress } from './Address';
import { IImage } from './Image';

export type IUserType = 'agency' | 'owner' | 'salesperson';

export interface IUser {
  id: string;
  type: IUserType;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
  profileImage?: IImage;
  password: string;
  confirmPassword: string;
  personalFirstName?: string;
  personalLastName?: string;
  personalId?: string;
  legalName?: string;
  tradeName?: string;
  companyId?: string;
  creci?: string;
  creciState?: string;
  activeLandsCount?: number;
  servedCities?: IAddress[];
  createdAt: string;
}
