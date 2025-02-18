import { Controller, FieldValues } from 'react-hook-form';
import { IBaseField, IFieldController } from './types';

export const FieldController = <
  TForm extends FieldValues,
  TFieldProps extends IBaseField,
>({
  name,
  control,
  component: Comp,
  valueKey,
  ...rest
}: IFieldController<TForm, TFieldProps>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => {
      const isValid =
        (fieldState.isDirty || fieldState.isTouched) && !fieldState.error;
      const error = isValid ? undefined : fieldState?.error;

      const props = {
        ...rest,
        ...field,
        [valueKey || 'value']: field.value,
        error: error?.message,
        isValid,
      } as unknown as TFieldProps;

      return <Comp {...props} />;
    }}
  />
);
