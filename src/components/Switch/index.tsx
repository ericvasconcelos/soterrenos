import { forwardRef } from 'react';

import { ISwitch } from './types';

export const Switch = forwardRef<HTMLInputElement, ISwitch>(
  (
    {
      id,
      labelActive,
      labelInactive,
      value,
      disabled,
      isLoading = false,
      isValid,
      className,
      ...rest
    },
    ref
  ) => (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <input
        ref={ref}
        id={id}
        type="checkbox"
        checked={value}
        disabled={disabled || isLoading}
        aria-invalid={!isValid}
        className="hidden"
        {...rest}
      />
      <span
        className={`relative block w-10 h-6 rounded-full transition-colors duration-200 ${
          value ? 'bg-primary-500' : 'bg-gray-300'
        } ${!disabled && 'hover:bg-primary-400'}`}
      >
        <span
          className={`absolute block top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-sm transform transition-transform duration-200 ${
            value ? 'left-5 bg-white' : 'left-1 bg-gray-100'
          }`}
        />
      </span>
      <span className="text-sm font-medium text-gray-700">
        {value ? labelActive : labelInactive}
      </span>
    </label>
  )
);
