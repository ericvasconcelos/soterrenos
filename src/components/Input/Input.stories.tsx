import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { Input } from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    isValid: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;
type InputProps = ComponentProps<typeof Input>;

const CompInput = (args: InputProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default: Story = {
  args: {
    id: 'input-default',
    label: 'Nome',
    type: 'email',
    value: '',
    placeholder: 'Digite seu nome',
    error: '',
    isValid: true,
    disabled: false,
  },
  render: CompInput,
};

export const WithError: Story = {
  args: {
    id: 'input-error',
    label: 'Email',
    type: 'text',
    value: 'Olha lá quem vem do lado oposto...',
    placeholder: 'Digite seu email',
    error: 'Texto inválido',
    disabled: false,
    isValid: false,
  },
  render: CompInput,
};
