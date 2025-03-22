// LandCard.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { LandCard } from './index';
import { ILandCard } from './types';

const meta: Meta<typeof LandCard> = {
  title: 'Components/LandCard',
  component: LandCard,
  tags: ['autodocs'],
};

export default meta;

// Mock data
const mockLandData: ILandCard = {
  url: 'terreno-exemplo-123',
  images: [
    {
      src: '  https://placehold.co/400x300',
      width: 400,
      height: 300,
      alt: 'Imagem do terreno',
    },
    {
      src: '  https://placehold.co/400x300/FF0000',
      width: 400,
      height: 300,
      alt: 'Imagem adicional 1',
    },
    {
      src: '  https://placehold.co/400x300/00FF00',
      width: 400,
      height: 300,
      alt: 'Imagem adicional 2',
    },
  ],
  address: {
    neighborhood: 'Bairro Moderno',
    city: 'Cidade Progresso',
    state: 'SP',
    zipCode: '12345-678',
    street: 'Rua das Flores',
    number: '100',
  },
  landSize: {
    front: 25,
    left: 30,
    right: 30,
    back: 25,
  },
  price: 500000,
};

type Story = StoryObj<typeof LandCard>;
type LandCardProps = ComponentProps<typeof LandCard>;

const CompLandCard = (args: LandCardProps) => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route
        path="/"
        element={
          <div className="max-w-sm">
            <LandCard {...args} />
          </div>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const Default: Story = {
  args: {
    ...mockLandData,
  },
  render: (args) => <CompLandCard {...args} />,
};
