import { IAddress, ILandSize } from '@/types';

export interface IModalShare {
  isOpen: boolean;
  close: () => void;
  price: number;
  landSize: ILandSize;
  address: IAddress;
}
