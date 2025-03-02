import { Link } from 'react-router';

import { Avatar, Button, Container, Icon } from '@/components';
import { Dropdown } from '@/components/Dropdown';

import { menuItems } from './menu';

export const Header = () => (
  <header className="py-5 border-b-1 border-b-gray-300">
    <Container className="flex items-center justify-between gap-4">
      <Link to="/" className="block h-auto">
        <img
          src="/logos/logo.svg"
          width={120}
          height={29}
          className="block w-[120px] h-auto"
          alt="Logo Só Terrenos"
        />
      </Link>

      <menu className="flex items-center justify-end gap-4">
        <Button size="small">Anuncie seu terreno grátis</Button>

        <Dropdown items={menuItems}>
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
      </menu>
    </Container>
  </header>
);
