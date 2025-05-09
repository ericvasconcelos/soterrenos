import { useAuth } from '@/auth';
import { DropdownItem } from '@/components/Dropdown/types';

export const useMenuItems = (): DropdownItem[] => {
  const { logout, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return [
      {
        type: 'link',
        label: 'Meus anúncios',
        link: '/meus-anuncios/ativos',
      },
      {
        type: 'link',
        label: 'Minha conta',
        link: '/minha-conta/meus-dados',
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
        type: 'button',
        label: 'Sair da conta',
        onClick: logout,
      },
    ];
  }

  return [
    {
      type: 'link',
      label: 'Entrar',
      link: '/entrar',
    },
    {
      type: 'link',
      label: 'Cadastrar-se',
      link: '/cadastrar',
    },
  ];
};
