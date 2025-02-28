import { InputHTMLAttributes, ChangeEvent } from 'react';
import { IFormFieldProps } from '../FormField/types';

export interface TextAreaBase
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  label?: string;
  error?: string;
  isValid?: boolean;
}

export type ITextArea = TextAreaBase &
  IFormFieldProps<ChangeEvent<HTMLTextAreaElement>>;
