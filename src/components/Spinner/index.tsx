import { FC } from 'react';
import { ISpinner } from './types';
import cx from 'classnames';

export const Spinner: FC<ISpinner> = ({ color = 'primary', ...rest }) => {
  const classes = cx(
    'animate-spin block w-4 h-4 rounded-full border-solid border-[3px]',
    {
      'border-primary-100 border-b-primary-700': color === 'primary',
      'border-danger-100 border-b-danger-900': color === 'danger',
      'border-warning-100 border-b-warning-900': color === 'warning',
      'border-opacity-30 border-white/50 border-b-white': color === 'light',
    }
  );

  return <span className={classes} {...rest} />;
};
