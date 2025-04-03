import { useQuery } from '@tanstack/react-query';

import { fetchZipCode } from '@/services/zipCode';
import { IZipCodeData } from '@/services/zipCode/types';

export const useZipCode = (zipCode: string) =>
  useQuery<IZipCodeData, Error>({
    queryKey: ['zipCode', zipCode],
    queryFn: () => fetchZipCode(zipCode),
    enabled: !!zipCode && zipCode.length === 8,
    staleTime: 1000 * 60 * 5,
  });
