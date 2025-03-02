import { CSSProperties } from 'react';

export type ISkeletonName =
  | 'text_sm'
  | 'text_md'
  | 'text_lg'
  | 'title'
  | 'subtitle'
  | 'input'
  | 'button'
  | 'avatar'
  | 'card';

export interface ISkeleton {
  style?: CSSProperties;
  name?: ISkeletonName;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  id?: string;
  className?: string;
}
