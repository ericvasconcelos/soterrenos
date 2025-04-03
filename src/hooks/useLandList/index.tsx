import { useQuery } from '@tanstack/react-query';

import { fetchLands } from '@/services/lands';
import { ILand } from '@/types';

export const useLandList = (city?: string) =>
  useQuery<ILand[], Error>({
    queryKey: ['landList'],
    queryFn: () => fetchLands(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
