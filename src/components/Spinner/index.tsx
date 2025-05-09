import cx from 'classnames';
import { FC } from 'react';

import { ISpinner } from './types';

export const Spinner: FC<ISpinner> = ({
  color = 'primary',
  size = 'sm',
  className,
  ...rest
}) => {
  const classes = cx(
    className,
    'animate-spin block rounded-full border-solid border-[3px]',
    {
      'border-primary-200 border-b-primary-700': color === 'primary',
      'border-danger-100 border-b-danger-700': color === 'danger',
      'border-warning-100 border-b-warning-700': color === 'warning',
      'border-success-100 border-b-success-700': color === 'success',
      'border-gray-400 border-b-black': color === 'dark',
      'border-white/50 border-b-white': color === 'light',
      'w-4 h-4 border-[3px]': size === 'sm',
      'w-8 h-8 border-[5px]': size === 'md',
      'w-12 h-12 border-[7px]': size === 'lg',
    }
  );

  return <span className={classes} {...rest} />;
};
