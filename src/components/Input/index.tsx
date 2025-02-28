import { ChangeEvent, forwardRef } from 'react';
import cx from 'classnames';
import { IInput } from './types';
import { FormField } from '../FormField';
import { Label } from '../Label';

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    { id, label, isValid, error, disabled, onChange, filterValue, ...rest },
    ref
  ) => {
    const styleClass = cx(
      `w-full h-[56px] px-3 py-2 inset-shadow-[0_0_0_1px]
    focus-within:inset-shadow-[0_0_0_2px] rounded-lg bg-white
    text-sm font-normal`,
      {
        'inset-shadow-gray-500': !error,
        'inset-shadow-danger-700': !!error,
        'opacity-40': disabled,
      }
    );

    const inputClasses = `w-full text-gray-900 placeholder:text-gray-500 font-family font-normal outline-none`;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (filterValue) {
        const newValue = filterValue(value);
        const newEvent = { ...e, target: { ...e.target, value: newValue } };
        if (onChange) onChange(newEvent);
        return;
      }
      if (onChange) onChange(e);
    };

    return (
      <FormField id={id} error={error}>
        <div className={styleClass}>
          {label && (
            <Label id={id} text={label} invalid={!isValid && !!error} />
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={inputClasses}
            onChange={handleChange}
            {...rest}
          />
        </div>
      </FormField>
    );
  }
);

Input.displayName = 'Input';
