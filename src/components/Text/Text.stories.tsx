import { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'gray900',
          'gray700',
          'gray500',
          'gray',
          'white',
          'primary',
          'danger',
          'warning',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          'xs',
          'sm',
          'base',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '32px',
          '20px',
        ],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'medium', 'bold', 'semi-bold'],
      },
    },
    align: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
  },
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
