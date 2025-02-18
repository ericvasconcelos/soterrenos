import { ComponentType } from 'react';
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import { IFormFieldProps } from '../FormField/types';

export type IBaseField = Partial<Pick<ControllerRenderProps, 'onChange'>> &
  Omit<IFormFieldProps<unknown>, 'onChange'>;

type IExtraProps<TFieldProps extends IBaseField> = Omit<
  TFieldProps,
  'onChange' | 'onBlur' | 'error'
>;

export type IFieldController<
  TForm extends FieldValues,
  TFieldProps extends IBaseField,
> = {
  label?: string;
  name: Path<TForm>;
  control: Control<TForm>;
  component: ComponentType<TFieldProps>;
  valueKey?: keyof TFieldProps;
} & IExtraProps<TFieldProps>;
