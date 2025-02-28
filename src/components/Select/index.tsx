import { ChangeEvent, useState, forwardRef, useMemo, useCallback } from 'react';
import cx from 'classnames';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ISelect } from './types';
import { FormField } from '../FormField';
import { Label } from '../Label';
import { Icon } from '../Icon';

export const Select = forwardRef<HTMLButtonElement, ISelect>(
  (
    {
      id,
      value,
      name,
      label,
      options,
      placeholder,
      isValid,
      error,
      disabled,
      onChange,
    },
    ref
  ) => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = useMemo(
      () =>
        options.filter((option) =>
          option.label.toLowerCase().includes(search.toLowerCase())
        ),
      [options, search]
    );

    const handleValueChange = useCallback(
      (newValue: string) => {
        // Se newValue for vazio, não dispara onChange
        if (newValue !== '' && onChange) {
          onChange({
            target: { value: newValue, name },
          } as ChangeEvent<HTMLSelectElement>);
        }
      },
      [name, onChange]
    );

    const handleOpenChange = (value: boolean) => {
      setIsOpen(value);
    };

    const containerClasses = cx(
      `relative w-full h-[56px] px-3 py-2 inset-shadow-[0_0_0_1px]
      rounded-lg bg-white text-sm font-normal`,
      {
        'inset-shadow-gray-500': isValid,
        'inset-shadow-danger-700': !isValid,
        'opacity-40': disabled,
        'inset-shadow-[0_0_0_2px]': isOpen,
      }
    );

    return (
      <FormField id={id} error={error}>
        <div className={containerClasses}>
          {label && <Label id={id} text={label} invalid={!isValid} />}

          <SelectPrimitive.Root
            name={name}
            value={value as string}
            onValueChange={handleValueChange}
            disabled={disabled}
            onOpenChange={handleOpenChange}
          >
            <SelectPrimitive.Trigger
              ref={ref}
              className="absolute top-0 right-0 left-0 bottom-0 px-3 w-full h-full flex items-center justify-between pt-4 text-gray-900 font-normal outline-none appearance-none"
            >
              {value
                ? options.find((opt) => opt.value === value)?.label
                : placeholder || 'Selecione'}
              <Icon name="chevron-down" />
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
              <SelectPrimitive.Content
                position="popper"
                className="w-full bg-white shadow-lg rounded-lg border border-gray-300 z-50"
              >
                <div className="px-2 pt-2">
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none"
                  />
                </div>
                <SelectPrimitive.Viewport className="p-2">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <SelectPrimitive.Item
                        key={option.value}
                        value={option.value}
                        className="p-2 rounded-md text-sm text-gray-900 hover:bg-gray-200 focus:outline-none cursor-pointer"
                      >
                        {option.label}
                      </SelectPrimitive.Item>
                    ))
                  ) : (
                    <div className="p-2 text-gray-800 text-sm">
                      Nenhuma opção encontrada
                    </div>
                  )}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
          </SelectPrimitive.Root>
        </div>
      </FormField>
    );
  }
);

Select.displayName = 'Select';
