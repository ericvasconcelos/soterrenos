import { FocusEventHandler, ReactNode } from 'react';
import { ChangeHandler } from 'react-hook-form';

export interface IFormField {
  error?: string;
  className?: string;
  children: ReactNode;
}

export interface IFormFieldProps<Event> {
  name?: string;
  error?: string;
  onChange?: (value: Event) => void;
  onBlur?: FocusEventHandler | ChangeHandler;
}
