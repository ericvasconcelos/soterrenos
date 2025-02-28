import { ReactNode } from 'react';

export interface ICard {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hasShadow?: boolean;
  className?: string;
  children: ReactNode;
}
