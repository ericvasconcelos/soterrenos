import { Meta, StoryObj } from '@storybook/react';

import { Text } from '../Text';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    padding: 'md',
    hasShadow: true,
    className: 'm-8',
    children: (
      <>
        <Text size="lg" weight="bold" className="mb-4">
          Card Title
        </Text>
        <Text weight="light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam culpa
          id recusandae blanditiis harum sapiente doloremque perferendis saepe
          neque? Pariatur, a quam. Provident nobis saepe aut minus laboriosam
          expedita ut.
        </Text>
      </>
    ),
  },
};
