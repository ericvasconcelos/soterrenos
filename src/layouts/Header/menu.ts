import { DropdownItem } from '@/components/Dropdown/types';

export const menuItems: DropdownItem[] = [
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
