import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';

import { Dropdown } from './index';
import { DropdownItem } from './types';

const items: DropdownItem[] = [
  { type: 'separate' },
  { type: 'link', label: 'Central de ajuda', link: '/' },
  { type: 'link', label: 'Sair da conta', link: '/' },
];

const renderDropdown = () =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Dropdown items={items}>
        <button>Open Dropdown</button>
      </Dropdown>
    </MemoryRouter>
  );

describe('Dropdown Component', () => {
  it('deve renderizar o trigger sem o conteúdo do popover inicialmente', () => {
    renderDropdown();

    const trigger = screen.getByRole('button', { name: /open dropdown/i });
    expect(trigger).toBeInTheDocument();
    expect(screen.queryByText('Central de ajuda')).not.toBeInTheDocument();
  });

  it('deve abrir o popover e renderizar os itens quando o trigger é clicado', async () => {
    renderDropdown();

    const trigger = screen.getByRole('button', { name: /open dropdown/i });
    userEvent.click(trigger);

    const separator = await screen.findByRole('separator');
    expect(separator).toBeInTheDocument();

    const centralLink = screen.getByText('Central de ajuda');
    expect(centralLink).toBeInTheDocument();
    expect(centralLink).toHaveAttribute('href', '/');

    const sairLink = screen.getByText('Sair da conta');
    expect(sairLink).toBeInTheDocument();
    expect(sairLink).toHaveAttribute('href', '/');

    expect(centralLink.className).toMatch(/bg-gray-200/);
    expect(sairLink.className).toMatch(/bg-gray-200/);
  });
});
