import { IImage } from '@/types';
import { HTMLAttributes } from 'react';

export type ISizes = 'sm' | 'md' | 'lg';

export interface IAvatar extends HTMLAttributes<HTMLSpanElement> {
  size?: ISizes;
  image?: IImage;
  firstName?: string;
  lastName?: string;
}
