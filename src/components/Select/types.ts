// types.ts
import { ChangeEvent, SelectHTMLAttributes } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface SelectBase
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  isValid?: boolean;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
}

export type ISelect = SelectBase &
  IFormFieldProps<ChangeEvent<HTMLSelectElement>>;
