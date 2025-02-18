import { ChangeEvent, forwardRef } from 'react';
import cx from 'classnames';
import { ISelect } from './types';
import { FormField } from '../FormField';
import { Label } from '../Label';
import { Icon } from '../Icon';

export const Select = forwardRef<HTMLSelectElement, ISelect>(
  (
    {
      id,
      label,
      options,
      placeholder,
      isValid,
      error,
      disabled,
      onChange,
      ...rest
    },
    ref
  ) => {
    const containerClasses = cx(
      `relative w-full h-[56px] px-3 py-2 inset-shadow-[0_0_0_1px]
      focus-within:inset-shadow-[0_0_0_2px] rounded-lg bg-white
      text-sm font-normal`,
      {
        'inset-shadow-gray-500': isValid,
        'inset-shadow-danger-700': !isValid,
        'opacity-40': disabled,
      }
    );

    const selectClasses = `w-full text-gray-900 font-normal outline-none appearance-none`;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) onChange(e);
    };

    return (
      <FormField id={id} error={error}>
        <div className={containerClasses}>
          {label && <Label id={id} text={label} invalid={!isValid} />}
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            className={selectClasses}
            onChange={handleChange}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled hidden className="-indent-4">
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option
                key={(option.value || option.label) as string}
                {...option}
              >
                {option.label}
              </option>
            ))}
          </select>

          <span className="absolute top-4.5 right-2">
            <Icon name="chevron-down" />
          </span>
        </div>
      </FormField>
    );
  }
);

Select.displayName = 'Select';
