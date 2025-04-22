import { useQuery } from '@tanstack/react-query';

import { searchLands } from '@/services/lands';
import { ILands } from '@/services/lands/types';

export const useSearchLands = (url: string) => {
  const { data, isLoading } = useQuery<ILands, Error>({
    queryKey: ['searchLands', url],
    queryFn: () => searchLands(url),
    enabled: !!url,
    staleTime: 1000 * 60 * 5,
  });

  return {
    lands: data?.data ?? [],
    count: data?.count ?? 0,
    currentPage: data?.currentPage ?? 0,
    lastPage: data?.lastPage ?? 0,
    nextPage: data?.nextPage ?? 0,
    prevPage: data?.prevPage ?? 0,
    isLoading,
  };
};
