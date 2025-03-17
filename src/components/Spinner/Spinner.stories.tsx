import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './index';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'danger', 'warning', 'light'],
      },
    },
  },
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
