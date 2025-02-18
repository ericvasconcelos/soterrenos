import { ReactNode } from 'react';

export interface ICard {
  padding?: 'sm' | 'md' | 'lg';
  hasShadow?: boolean;
  className?: string;
  children: ReactNode;
}
