import { useQuery } from '@tanstack/react-query';

import { useAuth } from '@/auth';
import { getUser, getUserData } from '@/services/user';
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

export const useGetUserData = (id?: string) =>
  useQuery<IUser, Error>({
    queryKey: ['user', id],
    queryFn: () => getUserData(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
