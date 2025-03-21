export interface ISearchForm {
  state: string;
  city: string;
  neighborhood: string;
  minPrice?: string;
  maxPrice?: string;
  minArea?: string;
  maxArea?: string;
  fgts?: boolean;
  financing?: boolean;
  hasWater?: boolean;
  hasArtesianWell?: boolean;
  hasSewageSystem?: boolean;
  hasEletricity?: boolean;
  isFenced?: boolean;
  isLandLeveled?: boolean;
  isLotClear?: boolean;
  soilType?: string;
  slope?: string;
  zoning?: string;
  sunPosition?: string;
}
