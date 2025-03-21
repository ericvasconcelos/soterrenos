import { Link } from 'react-router';

import { useAuth } from '@/auth';
import { Avatar, Button, Container, Icon } from '@/components';
import { Dropdown } from '@/components/Dropdown';

import { useMenuItems } from './useMenuItems';

export const Header = () => {
  const menuItems = useMenuItems();
  const { isAuthenticated } = useAuth();

  return (
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

              {isAuthenticated ? (
                <Avatar
                  image={{
                    src: '/eric.jpg',
                    width: 400,
                    height: 400,
                    alt: 'Eric Vasconcelos',
                  }}
                />
              ) : (
                <Avatar
                  image={{
                    src: '/placeholder/user-icon-placeholder.jpg',
                    width: 512,
                    height: 512,
                    alt: 'Usuário',
                  }}
                />
              )}
            </button>
          </Dropdown>
        </menu>
      </Container>
    </header>
  );
};
