import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/auth';
import { getUser } from '@/services/user';
import { IUser } from '@/types';

export const useUser = () => {
  const { isAuthenticated } = useAuth();

  return useQuery<IUser, Error>({
    queryKey: ['user-me'],
    queryFn: getUser,
    enabled: isAuthenticated,
    staleTime: 1000 * 60 * 5,
  });
};
