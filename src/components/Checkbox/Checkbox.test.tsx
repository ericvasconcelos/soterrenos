import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IFormField } from '../FormField/types';
import { Checkbox } from './index';

jest.mock('../FormField', () => ({
  FormField: ({ children, error, className }: IFormField) => (
    <div data-testid="form-field" className={className} data-error={!!error}>
      {children}
      {error && <span data-testid="error-message">{error}</span>}
    </div>
  ),
}));

describe('Checkbox Component', () => {
  const basicProps = {
    id: 'test-checkbox',
    content: 'Checkbox Label',
    onChange: jest.fn,
  };

  it('renders correctly with basic props', () => {
    render(<Checkbox {...basicProps} />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Checkbox Label');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('handles checked state correctly', () => {
    render(<Checkbox {...basicProps} value={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('displays error message when provided', () => {
    const error = 'This field is required';
    render(<Checkbox {...basicProps} error={error} />);

    expect(screen.getByTestId('error-message')).toHaveTextContent(error);
    expect(screen.getByTestId('form-field')).toHaveAttribute(
      'data-error',
      'true'
    );
  });

  it('applies disabled state correctly', () => {
    render(<Checkbox {...basicProps} disabled />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    expect(checkbox.parentElement).toHaveClass(
      '[&:has(input:disabled)]:cursor-not-allowed'
    );
  });

  it('handles loading state', () => {
    render(<Checkbox {...basicProps} isLoading />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('disabled:bg-gray-300');
  });

  it('applies validity state', () => {
    const { rerender } = render(<Checkbox {...basicProps} isValid={false} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-invalid',
      'true'
    );

    rerender(<Checkbox {...basicProps} isValid={true} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-invalid',
      'false'
    );
  });

  it('handles click interactions', async () => {
    const handleChange = jest.fn();
    render(<Checkbox {...basicProps} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it('applies correct styling classes', () => {
    render(<Checkbox {...basicProps} className="custom-class" />);

    const formField = screen.getByTestId('form-field');
    const checkbox = screen.getByRole('checkbox');

    expect(formField).toHaveClass('custom-class');
    expect(checkbox).toHaveClass(
      'peer appearance-none w-4 h-4 border border-gray-400 rounded-sm',
      'focus:ring-primary-500 focus:ring-2 ring-offset-white ring-offset-2'
    );
  });

  it('displays content correctly', () => {
    const customContent = <span>Custom Content</span>;
    render(<Checkbox {...basicProps} content={customContent} />);

    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<Checkbox {...basicProps} ref={ref} />);

    expect(ref).toHaveBeenCalledWith(screen.getByRole('checkbox'));
  });
});
