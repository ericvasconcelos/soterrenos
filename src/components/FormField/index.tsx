import { FC } from 'react';
import { IFormField } from './types';

export const FormField: FC<IFormField> = ({ id, error, children }) => (
  <div className="mb-6" {...(id && { 'data-testid': id })}>
    {children}
    {error && <p className="mt-2 text-xs text-danger-900">{error}</p>}
  </div>
);
