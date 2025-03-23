import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    image: {
      src: 'https://placehold.co/100x100',
      width: 100,
      height: 100,
      alt: 'Profile image',
    },
    firstName: 'Image',
    lastName: 'User',
    size: 'lg',
  },
};
