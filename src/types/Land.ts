import { IAddress } from './Address';
import { IImage } from './Image';
import { IUser } from './User';

export interface ILandSize {
  front: number;
  left: number;
  right: number;
  back: number;
}

export type ISoilType = 'clay' | 'sandy' | 'rocky';
export type ISlopeType = 'flat' | 'downhill' | 'uphill';
export type IZoningType = 'residential' | 'commercial' | 'industrial';
export type ISunPositionType = 'east-facing' | 'west-facing';

export interface ILand {
  id: string;
  slug: string;
  user: IUser;
  active: boolean;
  lastUpdate: string;
  title: string;
  images: IImage[];
  videoUrl?: string;
  address: IAddress;
  landSize: ILandSize;
  price: number;
  condominiumTax?: number;
  propertyTax?: number;
  financingAvailable: boolean;
  fgts: boolean;
  description: string;
  hasWater: boolean;
  hasArtesianWell: boolean;
  hasSewageSystem: boolean;
  hasEletricity: boolean;
  hasGas: boolean;
  hasInternet: boolean;
  isFenced: boolean;
  isLandLeveled: boolean;
  isLotClear: boolean;
  soil: ISoilType;
  slope: ISlopeType;
  zoning: IZoningType;
  sunPosition: ISunPositionType;
  established: boolean;
  paved: boolean;
  streetLighting: boolean;
  sanitationBasic: boolean;
  sidewalks: boolean;
  gatedEntrance: boolean;
  security: boolean;
  commonAreas: string[];
  publicTransportation: string[];
  restaurant: boolean;
  school: boolean;
  hospital: boolean;
  supermarket: boolean;
  drugstore: boolean;
  gasStation: boolean;
  bank: boolean;
  createdAt: string;
  updatedAt: string;
  seller?: Pick<
    IUser,
    | 'personalFirstName'
    | 'personalLastName'
    | 'phoneNumber'
    | 'whatsappNumber'
    | 'email'
    | 'creci'
    | 'profileImage'
  >;
}
