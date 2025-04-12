import { useQuery } from '@tanstack/react-query';

import { fetchLands } from '@/services/lands';
import { ILand } from '@/types';

export const useLandList = ({ size }: { size?: number }) =>
  useQuery<ILand[], Error>({
    queryKey: ['landList'],
    queryFn: () => fetchLands(size),
    enabled: !!size,
    staleTime: 1000 * 60 * 5,
  });
