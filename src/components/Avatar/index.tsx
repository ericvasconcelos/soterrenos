import { FC } from 'react';
import { Text } from '../Text';
import { IAvatar } from './types';
import cx from 'classnames';
import { ISizeText } from '../Text/types';

const fontSizeClasses: Record<string, ISizeText> = {
  sm: 'sm',
  md: 'lg',
  lg: 'xl',
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
    `flex items-center justify-center rounded-full overflow-hidden tracking-wider bg-primary-500`,
    {
      'w-8 h-8': size === 'sm',
      'w-10 h-10': size === 'md',
      'w-12 h-12': size === 'lg',
    }
  );

  return (
    <div className="flex items-center justify-start gap-2">
      <span
        title={completeName}
        role={image ? 'figure' : 'img'}
        className={styleClass}
        {...rest}
      >
        {image ? (
          <img
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt ?? `Avatar image of ${completeName}`}
            className="block w-full h-full"
          />
        ) : (
          <Text size={fontSizeClasses[size]} color="white" weight="bold">
            {initials}
          </Text>
        )}
      </span>
    </div>
  );
};
