import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Text } from '../Text';
import { Tooltip } from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;
type TooltipProps = ComponentProps<typeof Tooltip>;

const CompTooltip = (args: TooltipProps) => (
  <div className="flex items-center justify-center w-full h-[360px]">
    <Tooltip {...args}>
      <Text>Hover me</Text>
    </Tooltip>
  </div>
);

export const Default: Story = {
  args: {
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum ducimus saepe dignissimos dolore esse reprehenderit ipsa aperiam fugiat recusandae dolorum sed nobis, dolorem aut voluptas tenetur. Adipisci, deserunt saepe?',
    contentPosition: 'top',
  },
  render: (args) => <CompTooltip {...args} />,
};
