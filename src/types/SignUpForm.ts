import { IUserType } from '@/types';

export interface ISignUpForm {
  type: IUserType;
  email: string;
  phoneNumber: string;
  whatsappNumber: string;
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
}
