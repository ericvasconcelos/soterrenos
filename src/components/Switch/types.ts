import { ChangeEvent, InputHTMLAttributes } from 'react';

import { IFormFieldProps } from '../FormField/types';

export interface ISwitchBase
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'content' | 'value'
  > {
  labelActive?: string;
  labelInactive?: string;
  isValid?: boolean;
  isLoading?: boolean;
  value?: boolean;
}

export type ISwitch = ISwitchBase &
  IFormFieldProps<ChangeEvent<HTMLInputElement>>;
