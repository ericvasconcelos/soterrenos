import { ChangeEvent, InputHTMLAttributes } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface InputBase
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  isValid?: boolean;
  filterValue?: (value: string) => string;
}

export type IInput = InputBase & IFormFieldProps<ChangeEvent<HTMLInputElement>>;
