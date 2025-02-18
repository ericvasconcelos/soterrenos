import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    isValid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;
type SelectProps = ComponentProps<typeof Select>;

const CompSelect = (args: SelectProps) => {
  const [value, setValue] = useState('');

  return (
    <Select
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: CompSelect,
  args: {
    id: 'select-default',
    label: 'Escolha uma opção',
    placeholder: 'Selecione uma opção',
    value: '',
    error: '',
    isValid: true,
    disabled: false,
    options: [
      {
        value: 'option1',
        label: 'Opção 1',
      },
      {
        value: 'option2',
        label: 'Opção 2',
      },
      {
        value: 'option3',
        label: 'Opção 3',
      },
    ],
  },
};
