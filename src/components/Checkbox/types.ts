import { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface CheckboxBase
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'content'> {
  content?: ReactNode;
  error?: string;
  isLoading?: boolean;
  isValid?: boolean;
}

export type ICheckbox = CheckboxBase &
  IFormFieldProps<ChangeEvent<HTMLInputElement>>;
