import { ReactNode, FocusEventHandler } from 'react';
import { ChangeHandler } from 'react-hook-form';

export interface IFormField {
  id?: string;
  error?: string;
  children: ReactNode;
}

export interface IFormFieldProps<Event> {
  id?: string;
  name?: string;
  error?: string;
  onChange?: (value: Event) => void;
  onBlur?: FocusEventHandler | ChangeHandler;
}
