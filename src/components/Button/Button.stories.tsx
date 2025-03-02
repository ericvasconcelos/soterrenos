import { Meta, StoryObj } from '@storybook/react';

import { IconNames } from '../Icon/types';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    icon: {
      control: { type: 'select', options: ['home', 'settings', 'user'] }, // exemplo de ícones
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    color: 'primary',
    size: 'default',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    icon: 'heart' as IconNames,
    iconPosition: 'right',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};
