import { ButtonHTMLAttributes } from 'react';
import { IconNames } from '../Icon/types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconNames;
  iconPosition?: 'left' | 'right';
  isFull?: boolean;
  color?: 'primary' | 'danger' | 'warning' | 'dark';
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'default' | 'large';
}
