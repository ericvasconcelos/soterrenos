import { IUser } from '@/types';

type IUserInfoPartial = Pick<
  IUser,
  | 'id'
  | 'type'
  | 'profileImage'
  | 'phoneNumber'
  | 'personalFirstName'
  | 'personalLastName'
  | 'tradeName'
  | 'whatsappNumber'
  | 'email'
  | 'creci'
  | 'creciState'
  | 'activeLandsCount'
  | 'createdAt'
>;

export interface IPartnerCard extends IUserInfoPartial {
  singular: string;
  article: string;
}
