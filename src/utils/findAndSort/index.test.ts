import { IState } from '../generateStates/types';
import { findAndSortCities, findAndSortNeighborhoods } from './index';

const mockStates: IState[] = [
  {
    value: 'SP',
    label: 'São Paulo',
    cities: [
      {
        value: 'sao_paulo',
        label: 'São Paulo',
        neighborhoods: [
          { value: 'pinheiros', label: 'Pinheiros' },
          { value: 'moema', label: 'Moema' },
        ],
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

  describe('findAndSortNeighborhoods', () => {
    it('should return sorted neighborhoods for selected city', () => {
      const result = findAndSortNeighborhoods(mockStates, 'SP', 'sao_paulo');
      expect(result).toEqual([
        { value: 'moema', label: 'Moema' },
        { value: 'pinheiros', label: 'Pinheiros' },
      ]);
    });

    it('should return empty array for invalid city', () => {
      const result = findAndSortNeighborhoods(mockStates, 'SP', 'invalid');
      expect(result).toEqual([]);
    });
  });
});
