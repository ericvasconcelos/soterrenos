import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { Textarea } from './index';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;
type TextareaProps = ComponentProps<typeof Textarea>;

const CompTextarea = (args: TextareaProps) => {
  const [value, setValue] = useState(args.value);

  return (
    <Textarea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  args: {
    id: 'textarea-default',
    label: 'Mensagem',
    value: '',
    placeholder: 'Digite uma mensagem aqui',
    error: '',
    isValid: true,
    disabled: false,
  },
  render: CompTextarea,
};

export const WithError: Story = {
  args: {
    id: 'textarea-default',
    label: 'Mensagem',
    value: '',
    placeholder: 'Digite uma mensagem aqui',
    error: 'Texto inválido',
    disabled: false,
    isValid: false,
  },
  render: CompTextarea,
};
