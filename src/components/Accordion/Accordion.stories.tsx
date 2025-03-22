import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './index';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    infos: [
      {
        title: 'Title 1',
        description: 'Description 1',
      },
      {
        title: 'Title 2',
        description: 'Description 2',
      },
      {
        title: 'Title 3',
        description: 'Description 3',
      },
    ],
  },
};
