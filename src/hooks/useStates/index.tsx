import { useQuery } from '@tanstack/react-query';

import { fetchLocations } from '@/services/locations';
import { ILocations } from '@/services/locations/types';
import { generateStateOptions } from '@/utils';

export const useStates = () => {
  const { data, isLoading } = useQuery<ILocations[], Error>({
    queryKey: ['fetchLocations'],
    queryFn: fetchLocations,
    staleTime: 1000 * 60 * 5,
  });

  return {
    states: generateStateOptions(data),
    statesLoading: isLoading,
  };
};
