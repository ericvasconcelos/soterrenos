import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface RadioBase
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'content'> {
  content?: ReactNode;
  error?: string;
  isLoading?: boolean;
  isValid?: boolean;
}

export type IRadio = RadioBase & IFormFieldProps<ChangeEvent<HTMLInputElement>>;
