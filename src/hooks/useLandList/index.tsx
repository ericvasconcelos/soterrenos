import { useQuery } from '@tanstack/react-query';

import { fetchLands, fetchLandsByUser } from '@/services/lands';
import { ILands } from '@/services/lands/types';
import { ILand } from '@/types';

export const useLandList = ({ size }: { size?: number }) =>
  useQuery<ILand[], Error>({
    queryKey: ['landList'],
    queryFn: () => fetchLands(size),
    enabled: !!size,
    staleTime: 1000 * 60 * 5,
  });

export const useLandsByUser = (
  id?: string,
  page?: number,
  size?: number,
  active?: boolean
) => {
  const { data, isLoading } = useQuery<ILands, Error>({
    queryKey: ['landsByUSer', id, page, size, active],
    queryFn: () => fetchLandsByUser(id, page, size, active),
    enabled: !!id,
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
