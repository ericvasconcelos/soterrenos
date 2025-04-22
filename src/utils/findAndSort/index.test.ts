import { IState } from '../generateStateOptions/types';
import { findAndSortCities } from './index';

const mockStates: IState[] = [
  {
    value: 'SP',
    label: 'São Paulo',
    cities: [
      {
        value: 'sao_paulo',
        label: 'São Paulo',
      },
    ],
  },
];

describe('Location Helpers', () => {
  describe('findAndSortCities', () => {
    it('should return sorted cities for selected state', () => {
      const result = findAndSortCities(mockStates, 'SP');
      expect(result).toEqual([{ value: 'sao_paulo', label: 'São Paulo' }]);
    });

    it('should return empty array for invalid state', () => {
      const result = findAndSortCities(mockStates, 'RJ');
      expect(result).toEqual([]);
    });
  });
});
