import classNames from 'classnames';

import { ILabel } from './types';

export const Label = ({ id, text, invalid }: ILabel) => {
  const labelClasses = classNames(
    'absolute block top-[10px] text-xs leading-none pointer-events-none',
    {
      'text-danger-900 font-medium': invalid,
      'text-gray-900 font-light': !invalid,
    }
  );

  return (
    <label htmlFor={id} className={labelClasses}>
      {text}
    </label>
  );
};
