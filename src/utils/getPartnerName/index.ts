import { IUser } from '@/types';

export const getPartnerName = (user: Partial<IUser>): string => {
  if (user?.type === 'agency') return user?.tradeName || '';
  return `${user?.personalFirstName} ${user?.personalLastName}`;
};
