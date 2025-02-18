import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
  },
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
      src: 'https://fakeimg.pl/100x100/8be8e5/909090?text=JD&font_size=80',
      width: 100,
      height: 100,
      alt: 'Profile image',
    },
    firstName: 'Image',
    lastName: 'User',
    size: 'lg',
  },
};
