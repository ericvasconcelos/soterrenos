import { HTMLAttributes } from 'react';

import { IImage } from '@/types';

export type ISizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface IAvatar extends HTMLAttributes<HTMLSpanElement> {
  size?: ISizes;
  image?: IImage;
  firstName?: string;
  lastName?: string;
}
