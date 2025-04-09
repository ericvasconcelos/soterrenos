import { HTMLAttributes, ReactNode } from 'react';

type AsProp =
  | 'p'
  | 'span'
  | 'strong'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label';

export type ISizeText =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export interface IText extends HTMLAttributes<HTMLElement> {
  tag?: AsProp;
  children?: ReactNode;
  size?: ISizeText;
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?:
    | 'primary-50'
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-500'
    | 'primary-700'
    | 'danger-50'
    | 'danger-100'
    | 'danger-200'
    | 'danger-700'
    | 'danger-900'
    | 'warning-50'
    | 'warning-100'
    | 'warning-200'
    | 'warning-700'
    | 'warning-900'
    | 'gray-50'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'light';
}
