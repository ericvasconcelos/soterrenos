import { useQuery } from '@tanstack/react-query';

import { fetchLand } from '@/services/lands';
import { ILand } from '@/types';

export const useFetchLand = (id?: string) =>
  useQuery<ILand, Error>({
    queryKey: ['land', id],
    queryFn: () => fetchLand(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
