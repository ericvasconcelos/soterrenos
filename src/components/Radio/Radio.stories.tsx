import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { Radio } from './index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;
type RadioProps = ComponentProps<typeof Radio>;

const CompRadio = (args: RadioProps) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="flex flex-col">
      <Radio
        {...args}
        id="option1"
        name="options"
        content="Option 1"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
      />
      <Radio
        {...args}
        id="option2"
        name="options"
        content="Option 2"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
      />
      <Radio
        {...args}
        id="option3"
        name="options"
        content="Option 3"
        checked={selected === 'option3'}
        onChange={() => setSelected('option3')}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    id: 'option1',
    name: 'options',
    content: 'Option 1',
    checked: true,
    isLoading: false,
    isValid: true,
    disabled: false,
  },
};

export const Interactive: Story = {
  render: CompRadio,
  args: {
    isLoading: false,
    isValid: true,
  },
};
