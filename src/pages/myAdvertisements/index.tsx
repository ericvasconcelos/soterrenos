import { Link, NavLink, Outlet } from 'react-router';

import { Button, Container, Text } from '@/components';
import { activeList, inactiveList } from '@/data';
import { Page } from '@/layouts/Page';

export default function MyAdvertisements() {
  const tabs = [
    {
      to: 'ativos',
      label: `Ativos (${activeList.total})`,
    },
    {
      to: 'inativos',
      label: `Inativos (${inactiveList.total})`,
    },
  ];

  return (
    <Page>
      <Container className="mb-12">
        <div className="flex justify-between items-center mt-12 mb-8">
          <Text tag="h1" size="2xl" weight="bold">
            Meus Anúncios
          </Text>
          <Button variant="primary">
            <Link to="/meus-anuncios/criar-anuncio">+ Novo Anúncio</Link>
          </Button>
        </div>

        <div className="flex gap-4 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-t-sm font-medium ${
                  isActive
                    ? 'border-b-2 bg-primary-100 border-primary-700 text-primary-700'
                    : 'text-gray-500 hover:text-primary-700'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        <Outlet />
      </Container>
    </Page>
  );
}
