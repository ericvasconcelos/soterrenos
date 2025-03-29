import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ImageGallery } from './index';

jest.mock('@/components/Icon', () => ({
  Icon: ({ name }: { name: string }) => <span data-testid={`icon-${name}`} />,
}));

const mockImages = [
  { src: 'image1.jpg', alt: 'First image' },
  { src: 'image2.jpg', alt: 'Second image' },
  { src: 'image3.jpg' },
];

const setup = (initialIndex = 0) => {
  const closeMock = jest.fn();
  render(
    <ImageGallery
      images={mockImages}
      initialIndex={initialIndex}
      close={closeMock}
    />
  );
  return { closeMock };
};

describe('ImageGallery Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render initial image and controls', () => {
    setup();

    expect(screen.getByRole('img')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getByText('1/3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument();
    expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument();
  });

  it('should navigate between images', async () => {
    setup();

    const nextButton = screen.getByTestId('icon-arrow-right').closest('button');
    await userEvent.click(nextButton!);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'image2.jpg');
    expect(screen.getByText('2/3')).toBeInTheDocument();

    const prevButton = screen.getByTestId('icon-arrow-left').closest('button');
    await userEvent.click(prevButton!);

    expect(screen.getByRole('img')).toHaveAttribute('src', 'image1.jpg');
  });

  it('should handle close button click', async () => {
    const { closeMock } = setup();
    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it('should conditionally render navigation buttons', () => {
    setup(0);
    expect(screen.queryByTestId('icon-arrow-left')).toBeNull();
    expect(screen.getByTestId('icon-arrow-right')).toBeInTheDocument();

    waitFor(() => {
      setup(mockImages.length - 1);
      expect(screen.getByTestId('icon-arrow-left')).toBeInTheDocument();
      expect(screen.queryByTestId('icon-arrow-right')).toBeNull();
    });
  });

  it('should wrap around when reaching image limits', async () => {
    setup(mockImages.length - 1);

    const nextButton = screen
      .getAllByTestId('icon-arrow-left')[0]
      .closest('button');
    await userEvent.click(nextButton!);

    expect(screen.getByText('3/3')).toBeInTheDocument();
  });

  it('should handle missing alt text', () => {
    setup(2);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Image 3');
  });
});
