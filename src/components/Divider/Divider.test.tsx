import { render, screen } from '@testing-library/react';

import { Divider } from './index';
import { IDivider } from './types';

describe('Divider Component', () => {
  it('should render with default spacing', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('border-gray-300');
    expect(divider).toHaveClass('my-6'); // Valor padrão 'lg'
  });

  it('should apply correct spacing classes', () => {
    const testCases: Array<{
      space: IDivider['space'];
      expectedClass: string;
    }> = [
      { space: 'sm', expectedClass: 'my-2' },
      { space: 'md', expectedClass: 'my-4' },
      { space: 'lg', expectedClass: 'my-6' },
      { space: 'xl', expectedClass: 'my-8' },
      { space: '2xl', expectedClass: 'my-10' },
      { space: '3xl', expectedClass: 'my-12' },
    ];

    testCases.forEach(({ space, expectedClass }) => {
      const { unmount } = render(<Divider space={space} />);
      const divider = screen.getByRole('separator');

      expect(divider).toHaveClass(expectedClass);
      unmount();
    });
  });

  it('should always have base border class', () => {
    render(<Divider space="xl" />);
    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('border-gray-300');
  });
});
