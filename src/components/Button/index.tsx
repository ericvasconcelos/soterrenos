import cx from 'classnames';
import { FC, useMemo } from 'react';

import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { IButton } from './types';

export const Button: FC<IButton> = ({
  className,
  variant = 'primary',
  color = 'primary',
  size = 'default',
  disabled,
  children,
  icon,
  iconPosition = 'right',
  isFull = false,
  isLoading = false,
  ...rest
}) => {
  // Classes dinâmicas com base nas props
  const classes = cx(
    `flex items-center justify-center gap-2 rounded-lg font-medium text-nowrap leading-[1.1]
      transition-opacity transition-colors ease-in-out duration-400 outline-black
    `,
    {
      // Variant primary
      'bg-primary-700 text-light': variant === 'primary' && color === 'primary',
      'bg-danger-700 text-light': variant === 'primary' && color === 'danger',
      'bg-warning-700 text-light': variant === 'primary' && color === 'warning',
      'bg-success-700 text-light': variant === 'primary' && color === 'success',

      // Variant secondary
      'bg-primary-100 text-primary-700':
        variant === 'secondary' && color === 'primary',
      'bg-danger-50 text-danger-700':
        variant === 'secondary' && color === 'danger',
      'bg-warning-50 text-warning-700':
        variant === 'secondary' && color === 'warning',
      'bg-success-50 text-success-700':
        variant === 'secondary' && color === 'success',

      // Variant tertiary
      'bg-transparent text-primary-700 hover:bg-primary-100':
        variant === 'tertiary' && color === 'primary',
      'bg-transparent text-danger-700 hover:bg-danger-50':
        variant === 'tertiary' && color === 'danger',
      'bg-transparent text-warning-700 hover:bg-warning-50':
        variant === 'tertiary' && color === 'warning',
      'bg-transparent text-success-700 hover:bg-success-50':
        variant === 'tertiary' && color === 'success',

      // Sizes
      'h-8 px-4 text-sm': size === 'small',
      'h-10 px-5 text-base': size === 'default',
      'h-12 px-6 text-lg': size === 'large',

      // Disabled
      'hover:opacity-80 active:opacity-80 cursor-pointer': !disabled,
      'opacity-50 hover:opacity-50 active:opacity-50 cursor-not-allowed':
        disabled,

      // Width Full
      'w-full': isFull,
    },
    className
  );

  const spinnerColor = useMemo(() => {
    if (variant === 'primary') {
      return 'light';
    }

    if (color === 'primary') {
      return 'primary';
    }

    if (color === 'danger') {
      return 'danger';
    }

    if (color === 'warning') {
      return 'warning';
    }

    if (color === 'success') {
      return 'success';
    }

    return 'dark';
  }, [variant, color]);

  return (
    <button {...rest} disabled={disabled || isLoading} className={classes}>
      {iconPosition === 'left' && icon && (
        <Icon name={icon} color={spinnerColor} />
      )}

      {children}

      {iconPosition === 'right' && icon && (
        <Icon name={icon} color={spinnerColor} />
      )}

      {isLoading && <Spinner color={spinnerColor} className="ml-2" />}
    </button>
  );
};
