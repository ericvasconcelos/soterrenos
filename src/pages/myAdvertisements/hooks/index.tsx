import { useQuery } from '@tanstack/react-query';

import { fetchLandsByUser } from '@/services/lands';
import { ILands } from '@/services/lands/types';

export const useLandsByUser = (
  id?: string,
  page?: number,
  size?: number,
  active?: boolean
) => {
  const { data } = useQuery<ILands, Error>({
    queryKey: ['landsByUSer', id, page, size, active],
    queryFn: () => fetchLandsByUser(id, page, size, active),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: data?.data ?? [],
    lastPage: data?.lastPage ?? 0,
  };
};
