import cx from 'classnames';
import { FC } from 'react';

import { ICard } from './types';

export const Card: FC<ICard> = ({
  padding = 'md',
  hasShadow = false,
  className,
  children,
}) => {
  const classes = cx(
    'bg-white border border-gray-300 rounded-xl overflow-hidden',
    {
      'p-0': padding === 'none',
      'p-3 lg:p-4': padding === 'sm',
      'p-6 lg:p-8': padding === 'md',
      'p-9 lg:p-12': padding === 'lg',
      'shadow-md': hasShadow,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};
