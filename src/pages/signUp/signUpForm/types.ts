export type IUserType = 'agency' | 'owner' | 'salesperson';

export interface ISignUpForm {
  type: IUserType;
  email: string;
  phoneNumber: string;
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
