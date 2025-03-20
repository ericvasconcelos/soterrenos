import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Dropdown } from './index';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Dropdown>;
type DropdownProps = ComponentProps<typeof Dropdown>;

const CompDropdown = (args: DropdownProps) => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex items-center justify-center w-full h-[360px]">
            <Dropdown {...args}>
              <button className="unset flex justify-between items-center w-[90px] p-0 border border-gray-300 rounded-full cursor-pointer">
                <span className="ml-3">
                  <Icon name="menu-bar" size={26} strokeWidth={1.5} />
                </span>

                <Avatar
                  image={{
                    src: '/eric.jpg',
                    width: 400,
                    height: 400,
                    alt: 'Eric Vasconcelos',
                  }}
                />
              </button>
            </Dropdown>
          </div>
        }
      />
    </Routes>
  </MemoryRouter>
);

export const Default: Story = {
  args: {
    items: [
      {
        type: 'link',
        label: 'Meus anúncios',
        link: '/',
      },
      {
        type: 'link',
        label: 'Minha conta',
        link: '/',
      },
      {
        type: 'separate',
      },
      {
        type: 'link',
        label: 'Central de ajuda',
        link: '/',
      },
      {
        type: 'link',
        label: 'Encontrei um erro no site',
        link: '/',
      },
      {
        type: 'button',
        label: 'Sair da conta',
        onClick: () => 'logout',
      },
    ],
  },
  render: (args) => <CompDropdown {...args} />,
};
