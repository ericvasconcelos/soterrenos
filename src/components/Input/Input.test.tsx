import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './index';

describe('Input Component', () => {
  const basicProps = {
    id: 'test-input',
    placeholder: 'Enter text',
  };

  it('renders correctly with basic props', () => {
    render(<Input {...basicProps} />);

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('displays label when provided', () => {
    render(<Input {...basicProps} label="Username" />);
    const label = screen.getByTestId('label');

    expect(label).toHaveTextContent('Username');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('shows error message and styling', () => {
    const error = 'Invalid input';
    render(<Input {...basicProps} error={error} />);

    const errorMessage = screen.getByTestId('error-message');
    const formField = screen.getByTestId('form-field');

    expect(errorMessage).toHaveTextContent(error);
    expect(formField).toHaveAttribute('data-error', 'true');
  });

  it('applies disabled state', () => {
    render(<Input {...basicProps} disabled />);
    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toBeDisabled();
    expect(input.closest('div')).toHaveClass('opacity-40');
  });

  it('filters input values correctly', async () => {
    const filterValue = (val: string) => val.replace(/[^0-9]/g, '');
    render(<Input {...basicProps} filterValue={filterValue} />);

    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'abc123def');

    waitFor(() => {
      expect(input).toHaveValue('123');
    });
  });

  it('updates value correctly', async () => {
    const handleChange = jest.fn();
    render(<Input {...basicProps} onChange={handleChange} />);

    const input = screen.getByPlaceholderText('Enter text');
    await userEvent.type(input, 'test');

    expect(handleChange).toHaveBeenCalledTimes(4);
    expect(input).toHaveValue('test');
  });

  it('applies validity states', () => {
    const { rerender } = render(
      <Input {...basicProps} label="Test Label" isValid={false} error="Error" />
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('data-invalid', 'true');

    rerender(<Input {...basicProps} label="Test Label" isValid={true} />);
    expect(screen.getByTestId('label')).toHaveAttribute(
      'data-invalid',
      'false'
    );
  });

  it('matches accessibility requirements', () => {
    render(<Input {...basicProps} error="Error" />);
    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
  });
});
