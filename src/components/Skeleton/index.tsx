import { FC } from 'react';
import cx from 'classnames';
import { structuresMap } from './structuresMap';
import { ISkeleton, ISkeletonName } from './types';

export const Skeleton: FC<ISkeleton> = ({
  name,
  width,
  height,
  borderRadius,
  style = {},
  id,
  className,
}) => {
  const newStyle = structuresMap[name as ISkeletonName];
  const classes = cx('animate-skeleton', className);
  return (
    <div
      id={id}
      data-testid={id}
      className={classes}
      style={{
        ...newStyle,
        ...(width && { width }),
        ...(height && { height }),
        ...(borderRadius && { borderRadius }),
        ...style,
      }}
    />
  );
};
