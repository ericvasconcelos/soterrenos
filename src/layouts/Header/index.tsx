import { Link, useNavigate } from 'react-router';

import { useAuth } from '@/auth';
import { Avatar, Button, Container, Icon } from '@/components';
import { Dropdown } from '@/components/Dropdown';
import { useUser } from '@/hooks/useUser';

import { useMenuItems } from './useMenuItems';

export const Header = () => {
  const menuItems = useMenuItems();
  const { isAuthenticated } = useAuth();
  const { data } = useUser();
  const navigate = useNavigate();

  const defaultImage = {
    src: '/placeholder/user-60x60.webp',
    width: 40,
    height: 40,
    alt: 'Usuário',
  };

  return (
    <header className="py-5 bg-white border-b-1 border-b-gray-300">
      <Container className="flex items-center justify-between gap-4">
        <Link to="/" className="block h-auto outline-black">
          <img
            src="/logos/logo.svg"
            width={120}
            height={29}
            className="block w-[120px] h-auto"
            alt="Logo Só Terrenos"
          />
        </Link>

        <menu className="flex items-center justify-end gap-4">
          <Button
            size="small"
            onClick={() => navigate('/cadastro-anuncio/novo')}
          >
            Anuncie <i className="hidden md:block -mr-1 -ml-1">seu terreno</i>{' '}
            grátis
          </Button>

          <Dropdown items={menuItems}>
            <button className="unset flex justify-between items-center w-[90px] p-0 border border-gray-300 rounded-full cursor-pointer">
              <span className="ml-3">
                <Icon name="menu-bar" size={26} strokeWidth={1.5} />
              </span>

              {isAuthenticated && data?.profileImage?.src ? (
                <Avatar image={data.profileImage} />
              ) : (
                <Avatar image={defaultImage} />
              )}
            </button>
          </Dropdown>
        </menu>
      </Container>
    </header>
  );
};
