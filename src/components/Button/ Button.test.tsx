import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './index';

jest.mock('../Icon', () => ({
  Icon: ({ name, color }: { name: string; color: string }) => (
    <span data-testid={`icon-${name}-${color}`} />
  ),
}));

jest.mock('../Spinner', () => ({
  Spinner: ({ color }: { color: string }) => (
    <span data-testid={`spinner-${color}`} />
  ),
}));

describe('Button Component', () => {
  const defaultProps = {
    children: 'Test Button',
  };

  it('renders correctly with default props', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'h-10 px-5 text-base',
      'bg-primary-700 text-light'
    );
  });

  describe('Variant and Color combinations', () => {
    const variants = ['primary', 'secondary', 'tertiary'] as const;
    const colors = ['primary', 'danger', 'warning', 'dark'] as const;

    variants.forEach((variant) => {
      colors.forEach((color) => {
        it(`applies correct classes for ${variant} variant with ${color} color`, () => {
          render(<Button {...defaultProps} variant={variant} color={color} />);
          const button = screen.getByRole('button');

          expect(button).toHaveClass(
            variant === 'primary'
              ? `bg-${color}-700`
              : variant === 'secondary'
                ? `bg-${color}-${color === 'dark' ? 200 : 50}`
                : 'bg-transparent'
          );
        });
      });
    });
  });

  describe('Size variations', () => {
    it('applies small size classes', () => {
      render(<Button {...defaultProps} size="small" />);
      expect(screen.getByRole('button')).toHaveClass('h-8 px-4 text-sm');
    });

    it('applies large size classes', () => {
      render(<Button {...defaultProps} size="large" />);
      expect(screen.getByRole('button')).toHaveClass('h-12 px-6 text-lg');
    });
  });

  describe('Disabled states', () => {
    it('applies disabled styles when disabled', () => {
      render(<Button {...defaultProps} disabled />);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('opacity-50 cursor-not-allowed');
      expect(button).toBeDisabled();
    });

    it('disables button when loading', () => {
      render(<Button {...defaultProps} isLoading />);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
      expect(screen.getByTestId('spinner-light')).toBeInTheDocument();
    });
  });

  describe('Icon handling', () => {
    it('renders left icon correctly', () => {
      render(
        <Button {...defaultProps} icon="arrow-left" iconPosition="left" />
      );

      expect(screen.getByTestId('icon-arrow-left-primary')).toBeInTheDocument();
      expect(screen.getByRole('button').children[0]).toHaveAttribute(
        'data-testid',
        'icon-arrow-left-primary'
      );
    });

    it('renders right icon with custom color', () => {
      render(
        <Button
          {...defaultProps}
          icon="arrow-right"
          color="danger"
          variant="secondary"
        />
      );

      expect(screen.getByTestId('icon-arrow-right-danger')).toBeInTheDocument();
    });
  });

  describe('Loading state', () => {
    it('shows spinner with correct color for primary variant', () => {
      render(
        <Button {...defaultProps} isLoading variant="primary" color="warning" />
      );
      expect(screen.getByTestId('spinner-light')).toBeInTheDocument();
    });

    it('shows spinner with color based on color prop for non-primary variants', () => {
      render(
        <Button
          {...defaultProps}
          isLoading
          variant="secondary"
          color="danger"
        />
      );
      expect(screen.getByTestId('spinner-danger')).toBeInTheDocument();
    });
  });

  describe('Full width', () => {
    it('applies full width class when isFull is true', () => {
      render(<Button {...defaultProps} isFull />);
      expect(screen.getByRole('button')).toHaveClass('w-full');
    });
  });

  describe('Accessibility', () => {
    it('maintains button role with different props', () => {
      render(<Button {...defaultProps} as="div" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles click events when not disabled', async () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} onClick={handleClick} />);

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalled();
    });

    it('prevents click events when disabled', async () => {
      const handleClick = jest.fn();
      render(<Button {...defaultProps} disabled onClick={handleClick} />);

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
