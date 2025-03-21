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

export type IRadioOption<Value> = {
  value: Value;
  label: string;
  disabled?: boolean;
};

export interface IRadioField<Value = string> extends IFormFieldProps<Value> {
  title?: string;
  disabled?: boolean;
  value?: Value;
  options?: Array<IRadioOption<Value>>;
  direction?: 'column' | 'row';
  error?: string;
  className?: string;
}
