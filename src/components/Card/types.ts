import { HTMLAttributes, ReactNode } from 'react';

export interface ICard extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hasShadow?: boolean;
  className?: string;
  children: ReactNode;
}
