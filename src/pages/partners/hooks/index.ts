import { useQuery } from '@tanstack/react-query';

import { fetchUsersByType } from '@/services/users';
import { IUsers } from '@/services/users/types';
import { IUserType } from '@/types';

export const useUsersByType = (
  type: IUserType,
  page?: number,
  size?: number
) => {
  const { data, isLoading } = useQuery<IUsers, Error>({
    queryKey: ['usersByType', type, page, size],
    queryFn: () => fetchUsersByType(type, page, size),
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: data?.data ?? [],
    count: data?.count ?? 0,
    currentPage: data?.currentPage ?? 0,
    lastPage: data?.lastPage ?? 0,
    nextPage: data?.nextPage ?? 0,
    prevPage: data?.prevPage ?? 0,
    isLoading,
  };
};
