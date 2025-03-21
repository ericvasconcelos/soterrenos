import { useMemo } from 'react';

import { initialLands } from '../../../../utils/lands';
import { useLocation } from './useLocation';

export const useLandListByCity = () => {
  const { city, loading } = useLocation();

  const landsByCity = useMemo(() => {
    if (!city) return [];
    return initialLands
      .filter((land) => land.address.city.toLowerCase() === city.toLowerCase())
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }, [city]);

  return {
    lands: landsByCity,
    loading,
  };
};
