import { IAddress } from './Address';
import { IImage } from './Image';

export interface ILandSize {
  front: number;
  left: number;
  right: number;
  back: number;
}

export interface ISeller {
  name: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  creci: string;
  image: IImage;
}

export type IInfos = Record<
  string,
  Record<string, boolean | string | string[]>
>;

export interface ILand {
  code: string;
  active: boolean;
  lastUpdate: string;
  title: string;
  images: IImage[];
  address: IAddress;
  landSize: ILandSize;
  price: number;
  condominiumTax: number;
  propertyTax: number;
  financingAvailable: boolean;
  fgts: boolean;
  description: string;
  seller: ISeller;
  infos: IInfos;
}
