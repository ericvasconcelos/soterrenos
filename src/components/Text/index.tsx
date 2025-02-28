import { FC } from 'react';
import cx from 'classnames';
import { IText } from './types';

export const Text: FC<IText> = ({
  tag: Component = 'p',
  size = 'base',
  color = 'gray-900',
  weight = 'normal',
  align = 'left',
  className,
  children,
  ...rest
}) => {
  const classes = cx(
    `leading-tight text-${color}`,
    {
      'text-xs': size === 'xs',
      'text-sm': size === 'sm',
      'text-base': size === 'base',
      'text-lg': size === 'lg',
      'text-xl': size === 'xl',
      'text-2xl': size === '2xl',
      'text-3xl': size === '3xl',
      'text-4xl': size === '4xl',
      'text-5xl': size === '5xl',
      'text-6xl': size === '6xl',
      'font-light': weight === 'light',
      'font-normal': weight === 'normal',
      'font-medium': weight === 'medium',
      'font-bold': weight === 'bold',
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    },
    className
  );

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
