import { IImage } from '@/types';

export interface IImageGallery {
  images: IImage[];
  initialIndex: number;
  close: () => void;
}
