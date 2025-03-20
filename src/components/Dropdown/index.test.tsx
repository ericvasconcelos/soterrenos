import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import { Dropdown } from './index';
import { ButtonItem, DropdownItem } from './types';

const mockItems: DropdownItem[] = [
  { type: 'separate' },
  { type: 'link', label: 'Central de ajuda', link: '/help' },
  {
    type: 'button',
    label: 'Sair da conta',
    onClick: jest.fn(),
  },
];

const renderComponent = () =>
  render(
    <MemoryRouter>
      <Dropdown items={mockItems}>
        <button>Open Dropdown</button>
      </Dropdown>
    </MemoryRouter>
  );

describe('Dropdown Component', () => {
  it('should render trigger button', () => {
    renderComponent();

    const trigger = screen.getByRole('button', { name: 'Open Dropdown' });
    expect(trigger).toBeInTheDocument();
    expect(screen.queryByText('Central de ajuda')).not.toBeInTheDocument();
  });

  it('should open dropdown when clicked', async () => {
    renderComponent();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Open Dropdown' }));

    expect(screen.getByText('Central de ajuda')).toBeInTheDocument();
    expect(screen.getByText('Sair da conta')).toBeInTheDocument();
  });

  it('should render separator item', async () => {
    renderComponent();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Open Dropdown' }));

    const separators = document.getElementsByTagName('hr');
    expect(separators.length).toBe(1);
  });

  it('should navigate when clicking link item', async () => {
    renderComponent();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Open Dropdown' }));
    const linkItem = screen.getByRole('link', { name: 'Central de ajuda' });

    expect(linkItem).toHaveAttribute('href', '/help');
  });

  it('should trigger onClick when clicking button item', async () => {
    renderComponent();
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Open Dropdown' }));
    await user.click(screen.getByRole('button', { name: 'Sair da conta' }));

    expect((mockItems[2] as ButtonItem).onClick).toHaveBeenCalledTimes(1);
  });

  it('should apply active class to active link', async () => {
    render(
      <MemoryRouter initialEntries={['/help']}>
        <Dropdown items={mockItems}>
          <button>Open Dropdown</button>
        </Dropdown>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Open Dropdown' }));

    const activeLink = screen.getByRole('link', { name: 'Central de ajuda' });
    expect(activeLink).toHaveClass('bg-gray-200');
  });
});
