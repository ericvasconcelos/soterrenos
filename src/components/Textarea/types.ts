import { ChangeEvent, InputHTMLAttributes } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface TextAreaBase
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  rows?: number;
  label?: string;
  error?: string;
  isValid?: boolean;
}

export type ITextArea = TextAreaBase &
  IFormFieldProps<ChangeEvent<HTMLTextAreaElement>>;
