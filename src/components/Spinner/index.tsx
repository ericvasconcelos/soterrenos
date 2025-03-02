import cx from 'classnames';
import { FC } from 'react';

import { ISpinner } from './types';

export const Spinner: FC<ISpinner> = ({
  color = 'primary',
  className,
  ...rest
}) => {
  const classes = cx(
    className,
    'animate-spin block w-4 h-4 rounded-full border-solid border-[3px]',
    {
      'border-primary-200 border-b-primary-700': color === 'primary',
      'border-danger-100 border-b-danger-700': color === 'danger',
      'border-warning-100 border-b-warning-700': color === 'warning',
      'border-gray-400 border-b-black': color === 'dark',
      'border-white/50 border-b-white': color === 'light',
    }
  );

  return <span className={classes} {...rest} />;
};
