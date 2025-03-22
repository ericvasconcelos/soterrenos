import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './index';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    color: 'primary',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
  },
};
