import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Avatar } from './index';

describe('Avatar Component', () => {
  it('should render initials when no image is provided', () => {
    render(<Avatar firstName="John" lastName="Doe" />);
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toHaveAttribute('title', 'John Doe');
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('should render an image when image prop is provided', () => {
    const image = {
      src: 'https://example.com/avatar.png',
      width: 40,
      height: 40,
      alt: 'Example Avatar',
    };

    render(<Avatar image={image} firstName="Jane" lastName="Doe" />);
    const avatarElement = screen.getByRole('figure');
    const img = avatarElement.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', image.src);
    expect(img).toHaveAttribute('width', image.width.toString());
    expect(img).toHaveAttribute('height', image.height.toString());
    expect(img).toHaveAttribute('alt', image.alt);
  });

  it('should apply correct size classes based on the size prop', () => {
    const { container, rerender } = render(
      <Avatar firstName="A" lastName="B" size="sm" />
    );
    let span = container.querySelector('i');
    expect(span?.className).toMatch(/w-8/);
    expect(span?.className).toMatch(/h-8/);

    rerender(<Avatar firstName="A" lastName="B" size="md" />);
    span = container.querySelector('i');
    expect(span?.className).toMatch(/w-10/);
    expect(span?.className).toMatch(/h-10/);

    rerender(<Avatar firstName="A" lastName="B" size="lg" />);
    span = container.querySelector('i');
    expect(span?.className).toMatch(/w-12/);
    expect(span?.className).toMatch(/h-12/);
  });
});
