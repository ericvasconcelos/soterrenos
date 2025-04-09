import cx from 'classnames';
import { forwardRef } from 'react';

import { FormField } from '../FormField';
import { Label } from '../Label';
import { ITextArea } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ id, label, isValid, error, disabled, rows = 3, ...rest }, ref) => {
    const styleClass = cx(
      `relative w-full h-auto px-3 pt-6.5 pb-2 inset-shadow-[0_0_0_1px]
    focus-within:inset-shadow-[0_0_0_2px] rounded-lg bg-white
    text-sm font-normal`,
      {
        'inset-shadow-gray-500': !error,
        'inset-shadow-danger-700': !!error,
        'opacity-40': disabled,
      }
    );

    const textareaClasses = `w-full text-gray-900 placeholder:text-gray-500 font-family font-normal outline-none`;

    return (
      <FormField error={error}>
        <div className={styleClass}>
          {label && (
            <Label id={id} text={label} invalid={!isValid && !!error} />
          )}
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            className={textareaClasses}
            rows={rows}
            {...rest}
          ></textarea>
        </div>
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';
