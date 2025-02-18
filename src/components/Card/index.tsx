import { FC } from 'react';
import { ICard } from './types';
import cx from 'classnames';

export const Card: FC<ICard> = ({
  padding = 'md',
  hasShadow = false,
  className,
  children,
}) => {
  const classes = cx(
    'border border-gray-300 rounded-xl',
    {
      'p-4': padding === 'sm',
      'p-8': padding === 'md',
      'p-12': padding === 'lg',
      'shadow-md': hasShadow,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};
