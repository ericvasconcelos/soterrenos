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
  | 'h6';

export interface IText extends HTMLAttributes<HTMLElement> {
  tag?: AsProp;
  children?: ReactNode;
  color?:
    | 'gray900'
    | 'gray700'
    | 'gray500'
    | 'gray'
    | 'white'
    | 'primary'
    | 'danger'
    | 'warning';
  size?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '32px'
    | '20px';
  weight?: 'light' | 'normal' | 'medium' | 'bold' | 'semi-bold';
  align?: 'left' | 'center' | 'right';
}
