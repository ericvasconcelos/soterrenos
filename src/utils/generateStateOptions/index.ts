import { ILocations } from '@/services/locations/types';

import { IState } from './types';

export const generateStateOptions = (locations?: ILocations[]): IState[] => {
  if (!locations) return [];

  return locations.map(({ state, cities }) => ({
    value: state,
    label: state,
    cities: cities.map((city) => ({
      value: city,
      label: city,
    })),
  }));
};
