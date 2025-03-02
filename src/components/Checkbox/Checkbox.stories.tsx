import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    isLoading: { control: 'boolean' },
    isValid: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;
type InteractiveCheckboxProps = ComponentProps<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    content: 'Aceito os termos',
    checked: true,
    disabled: false,
  },
};

const InteractiveCheckbox = (args: InteractiveCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
};

export const Interactive: Story = {
  render: InteractiveCheckbox,
  args: {
    id: 'checkbox-interactive',
    name: 'checkbox-interactive',
    content: 'Aceito os termos e condições',
    error: '',
    isLoading: false,
    isValid: true,
  },
};
