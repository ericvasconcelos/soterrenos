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
  'soil',
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
  {
    name: 'minPrice',
    type: 'string',
    transform: (v) => filterMoneyMask(v || ''),
  },
  {
    name: 'maxPrice',
    type: 'string',
    transform: (v) => filterMoneyMask(v || ''),
  },
  { name: 'minArea', type: 'string' },
  { name: 'maxArea', type: 'string' },
  { name: 'fgts', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'financing', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'hasWater', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'hasArtesianWell', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'hasSewageSystem', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'hasEletricity', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'isFenced', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'isLandLeveled', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'isLotClear', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'soil', type: 'string' },
  { name: 'slope', type: 'string' },
  { name: 'zoning', type: 'string' },
  { name: 'sunPosition', type: 'string' },
  { name: 'established', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'paved', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'streetLighting', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'sanitationBasic', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'sidewalks', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'gatedEntrance', type: 'boolean', transform: (v) => v === 'true' },
  { name: 'security', type: 'boolean', transform: (v) => v === 'true' },
];
