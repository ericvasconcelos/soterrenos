import cx from 'classnames';
import { ChangeEvent, forwardRef, KeyboardEvent, useCallback } from 'react';

import { FormField } from '../FormField';
import { Text } from '../Text';
import { isCurrentRef } from './helper';
import { Radio } from './index';
import { IRadioField } from './types';

export const RadioFields = forwardRef<HTMLInputElement, IRadioField>(
  (props, ref) => {
    const {
      error,
      title,
      options,
      name,
      value,
      onChange,
      disabled = false,
      className,
      direction = 'row',
    } = props;

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event.currentTarget.value);
        }
      },
      [onChange]
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && onChange) {
          onChange(event.currentTarget.value);
        }
      },
      [onChange]
    );

    return (
      <div className={className}>
        <FormField error={error}>
          {title && (
            <Text size="sm" weight="medium" className="mb-1">
              {title}
            </Text>
          )}

          <div
            className={cx('flex', {
              'items-center flex-wrap': direction === 'row',
              'flex-col gap-2': direction === 'column',
            })}
          >
            {options?.map((option, index) => (
              <Radio
                key={option.value}
                id={option.value}
                name={name}
                value={option.value}
                content={option.label}
                checked={option.value === value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={!!option.disabled || !!disabled}
                ref={isCurrentRef(option, value, index) ? ref : undefined}
                className="mr-4 last:mr-0 mb-2"
              />
            ))}
          </div>
        </FormField>
      </div>
    );
  }
);

RadioFields.displayName = 'RadioFields';
