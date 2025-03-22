import { filterMoneyMask } from '@/utils';

import { ICommonArea, SearchParamConfig } from './types';

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
  'established',
  'paved',
  'streetLighting',
  'sanitationBasic',
  'sidewalks',
  'gatedEntrance',
  'security',
  'commonAreas',
];

export const commonAreas: ICommonArea[] = [
  {
    name: 'sports_court',
    label: 'Quadra esportiva',
  },
  {
    name: 'party_hall',
    label: 'Salão de Festas',
  },
  {
    name: 'gym',
    label: 'Academia',
  },
  {
    name: 'swimming_pool',
    label: 'Piscina',
  },
  {
    name: 'playground',
    label: 'Parquinho',
  },
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
  { name: 'established', transform: (v) => v === 'true' },
  { name: 'paved', transform: (v) => v === 'true' },
  { name: 'streetLighting', transform: (v) => v === 'true' },
  { name: 'sanitationBasic', transform: (v) => v === 'true' },
  { name: 'sidewalks', transform: (v) => v === 'true' },
  { name: 'gatedEntrance', transform: (v) => v === 'true' },
  { name: 'security', transform: (v) => v === 'true' },
];
