import { forwardRef } from 'react';

import { FormField } from '../FormField';
import { ICheckbox } from './types';

export const Checkbox = forwardRef<HTMLInputElement, ICheckbox>(
  (
    {
      id,
      value,
      error,
      content,
      isLoading = false,
      isValid,
      className,
      ...rest
    },
    ref
  ) => (
    <FormField error={error} className={className}>
      <label className="flex items-center gap-2 cursor-pointer [&:has(input:disabled)]:cursor-not-allowed">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          disabled={isLoading}
          aria-invalid={!isValid}
          className={`peer appearance-none w-[17px] h-[17px] border border-gray-400 rounded-sm
              focus:ring-primary-500 focus:ring-2 ring-offset-white ring-offset-2
              outline-none checked:bg-primary-700 checked:border-primary-700 cursor-pointer
              disabled:cursor-not-allowed disabled:bg-gray-300 disabled:border-gray-300
              `}
          {...rest}
          checked={value}
        />
        <span className="pb-0.5 text-sm font-light text-black peer-disabled:text-gray-500">
          {content}
        </span>
      </label>
    </FormField>
  )
);

Checkbox.displayName = 'Checkbox';
