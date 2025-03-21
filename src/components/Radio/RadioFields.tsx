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
      id,
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
          onChange(event.target.value);
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
        <FormField id={id} error={error}>
          {title && (
            <Text size="sm" weight="medium" className="mb-1">
              {title}
            </Text>
          )}

          <div
            className={cx('flex', {
              'gap-4 items-center': direction === 'row',
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
              />
            ))}
          </div>
        </FormField>
      </div>
    );
  }
);

RadioFields.displayName = 'RadioFields';
