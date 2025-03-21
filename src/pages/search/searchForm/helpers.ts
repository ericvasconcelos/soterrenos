import { filterMoneyMask } from '@/utils';

import { SearchParamConfig } from './types';

export const advancedParams = [
  'hasWater',
  'hasArtesianWell',
  'hasSewageSystem',
  'hasEletricity',
  'isFenced',
  'isLandLeveled',
  'isLotClear',
  'soilType',
  'slope',
  'zoning',
  'sunPosition',
];

export const paramConfigs: SearchParamConfig[] = [
  { name: 'minPrice', transform: (v) => filterMoneyMask(v || '') },
  { name: 'maxPrice', transform: (v) => filterMoneyMask(v || '') },
  { name: 'minArea' },
  { name: 'maxArea' },
  { name: 'fgts', transform: (v) => v === 'true' },
  { name: 'financing', transform: (v) => v === 'true' },
  { name: 'hasWater', transform: (v) => v === 'true' },
  { name: 'hasArtesianWell', transform: (v) => v === 'true' },
  { name: 'hasSewageSystem', transform: (v) => v === 'true' },
  { name: 'hasEletricity', transform: (v) => v === 'true' },
  { name: 'isFenced', transform: (v) => v === 'true' },
  { name: 'isLandLeveled', transform: (v) => v === 'true' },
  { name: 'isLotClear', transform: (v) => v === 'true' },
  { name: 'soilType' },
  { name: 'slope' },
  { name: 'zoning' },
  { name: 'sunPosition' },
];
