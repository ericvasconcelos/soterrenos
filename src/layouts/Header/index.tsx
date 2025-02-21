import { Link } from 'react-router';
import { Avatar, Button, Container, Icon } from '@/components';
import { Dropdown } from '@/components/Dropdown';
import { DropdownItem } from '@/components/Dropdown/types';

export const Header = () => {
  const menuItems: DropdownItem[] = [
    {
      type: 'link',
      label: 'Meus anúncios',
      link: '/meus-anuncios/ativos',
    },
    {
      type: 'link',
      label: 'Minha conta',
      link: '/minha-conta',
    },
    {
      type: 'separate',
    },
    {
      type: 'link',
      label: 'Central de ajuda',
      link: '/central-de-ajuda',
    },
    {
      type: 'link',
      label: 'Encontrei um erro no site',
      link: '/reportar-erro-no-site',
    },
    {
      type: 'link',
      label: 'Sair da conta',
      link: '/',
    },
  ];

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

        <menu className="flex items-center justify-end gap-6">
          <Button variant="tertiary">
            Anuncie<span className="hidden lg:inline"> seu terreno</span> grátis
          </Button>

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
};
