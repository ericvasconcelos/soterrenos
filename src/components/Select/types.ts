// types.ts
import { SelectHTMLAttributes, OptionHTMLAttributes, ChangeEvent } from 'react';
import { IFormFieldProps } from '../FormField/types';

export interface SelectBase
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  isValid?: boolean;
  options: OptionHTMLAttributes<HTMLOptionElement>[];
  placeholder?: string;
}

export type ISelect = SelectBase &
  IFormFieldProps<ChangeEvent<HTMLSelectElement>>;
