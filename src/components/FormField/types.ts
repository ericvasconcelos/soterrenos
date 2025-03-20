import { FocusEventHandler, ReactNode } from 'react';
import { ChangeHandler } from 'react-hook-form';

export interface IFormField {
  id?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export interface IFormFieldProps<Event> {
  id?: string;
  name?: string;
  error?: string;
  onChange?: (value: Event) => void;
  onBlur?: FocusEventHandler | ChangeHandler;
}
