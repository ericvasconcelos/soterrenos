import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/services/user';
import { IUser } from '@/types';

export const useUser = () =>
  useQuery<IUser, Error>({
    queryKey: ['user-me'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5,
  });
