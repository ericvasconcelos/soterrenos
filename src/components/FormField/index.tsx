import { FC } from 'react';

import { IFormField } from './types';

export const FormField: FC<IFormField> = ({
  id,
  error,
  className,
  children,
}) => (
  <div {...(id && { 'data-testid': id })} className={className}>
    {children}
    {error && <p className="mt-2 text-xs text-danger-900">{error}</p>}
  </div>
);
