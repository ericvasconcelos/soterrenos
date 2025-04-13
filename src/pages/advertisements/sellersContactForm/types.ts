import { IUser } from '@/types';

export type ISellersContactForm = Pick<
  IUser,
  | 'type'
  | 'personalFirstName'
  | 'personalLastName'
  | 'tradeName'
  | 'phoneNumber'
  | 'whatsappNumber'
  | 'email'
  | 'creci'
  | 'profileImage'
>;
