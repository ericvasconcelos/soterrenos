import cx from 'classnames';
import { FC } from 'react';

import { Text } from '../Text';
import { ISizeText } from '../Text/types';
import { IAvatar } from './types';

const fontSizeClasses: Record<string, ISizeText> = {
  sm: 'sm',
  md: 'lg',
  lg: 'xl',
  xl: '2xl',
  '2xl': '3xl',
};

export const Avatar: FC<IAvatar> = ({
  image,
  firstName,
  lastName,
  size = 'md',
  ...rest
}) => {
  const initials =
    (firstName?.charAt(0) || '') + (lastName?.charAt(0) || '') || '';
  const completeName =
    firstName && lastName ? `${firstName} ${lastName}` : 'user';

  const styleClass = cx(
    `flex items-center justify-center rounded-full overflow-hidden tracking-wider bg-gray-100`,
    {
      'w-8 h-8': size === 'sm',
      'w-10 h-10': size === 'md',
      'w-12 h-12': size === 'lg',
      'w-20 h-20': size === 'xl',
      'w-28 h-28': size === '2xl',
    }
  );

  return (
    <span className="flex items-center justify-start gap-2">
      <i
        title={completeName}
        role={image ? 'figure' : 'img'}
        className={styleClass}
        {...rest}
      >
        {image ? (
          <img
            src={`${image.src}?v=${Date.now()}`}
            width={image.width}
            height={image.height}
            alt={image.alt ?? `Avatar image of ${completeName}`}
            className="block w-full h-full"
          />
        ) : (
          <Text size={fontSizeClasses[size]} weight="bold">
            {initials}
          </Text>
        )}
      </i>
    </span>
  );
};
