import { forwardRef } from 'react';
import cx from 'classnames';
import { ITextArea } from './types';
import { FormField } from '../FormField';
import { Label } from '../Label';

export const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ id, label, isValid, error, disabled, ...rest }, ref) => {
    const styleClass = cx(
      `w-full h-auto px-3 py-2 inset-shadow-[0_0_0_1px]
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
      <FormField id={id} error={error}>
        <div className={styleClass}>
          {label && (
            <Label id={id} text={label} invalid={!isValid && !!error} />
          )}
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            className={textareaClasses}
            {...rest}
          ></textarea>
        </div>
      </FormField>
    );
  }
);

Textarea.displayName = 'Textarea';
