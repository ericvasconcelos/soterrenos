import { FC, useMemo } from 'react';
import cx from 'classnames';
import { IButton } from './types';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

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
    `flex items-center justify-center gap-2 rounded-lg font-medium text-nowrap
      transition-opacity transition-colors ease-in-out duration-400 outline-black
    `,
    {
      // Variant primary
      'bg-primary-700 text-light': variant === 'primary' && color === 'primary',
      'bg-danger-700 text-light': variant === 'primary' && color === 'danger',
      'bg-warning-700 text-light': variant === 'primary' && color === 'warning',
      'bg-gray-900 text-light': variant === 'primary' && color === 'dark',

      // Variant secondary
      'bg-primary-100 text-primary-700':
        variant === 'secondary' && color === 'primary',
      'bg-danger-50 text-danger-700':
        variant === 'secondary' && color === 'danger',
      'bg-warning-50 text-warning-700':
        variant === 'secondary' && color === 'warning',
      'bg-gray-200 text-gray-900': variant === 'secondary' && color === 'dark',

      // Variant tertiary
      'bg-transparent text-primary-700 hover:bg-primary-100':
        variant === 'tertiary' && color === 'primary',
      'bg-transparent text-danger-700 hover:bg-danger-50':
        variant === 'tertiary' && color === 'danger',
      'bg-transparent text-warning-700 hover:bg-warning-50':
        variant === 'tertiary' && color === 'warning',
      'bg-transparent text-gray-900 hover:bg-gray-200':
        variant === 'tertiary' && color === 'dark',

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

    return 'light';
  }, [variant, color]);

  return (
    <button {...rest} disabled={disabled || isLoading} className={classes}>
      {iconPosition === 'left' && icon && (
        <Icon
          name={icon}
          color={variant === 'tertiary' ? 'primary-300' : 'light'}
        />
      )}

      <span className="leading-[1.1]">{children}</span>

      {iconPosition === 'right' && icon && (
        <Icon
          name={icon}
          color={variant === 'tertiary' ? 'primary-300' : 'light'}
        />
      )}

      {isLoading && <Spinner color={spinnerColor} />}
    </button>
  );
};
