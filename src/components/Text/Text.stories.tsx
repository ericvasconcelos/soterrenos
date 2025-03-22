import { Meta, StoryObj } from '@storybook/react';

import { Text } from './index';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Sample text content',
    tag: 'p',
  },
};

export const Heading: Story = {
  args: {
    children: 'Heading text',
    tag: 'h1',
    size: '3xl',
    weight: 'bold',
  },
};
