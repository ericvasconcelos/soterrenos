import { FC } from 'react';

import { IFormField } from './types';

export const FormField: FC<IFormField> = ({ error, className, children }) => (
  <div className={className} data-testid="form-field" data-error={!!error}>
    {children}
    {error && (
      <p className="mt-2 text-xs text-danger-900" data-testid="error-message">
        {error}
      </p>
    )}
  </div>
);
