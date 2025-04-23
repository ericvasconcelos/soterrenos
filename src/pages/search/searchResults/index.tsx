import { useMemo, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router';

import { Button, Skeleton, Text } from '@/components';
import { SEO } from '@/layouts/Seo';
import { generateArray } from '@/utils';

import { useSearchLands } from '../hooks/useSearchLands';
import { LandCard } from './landCard';

export const SearchResults = () => {
  const skeletons = generateArray(6);
  const location = useLocation();
  const { state, city } = useParams();
  const [error] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1') ?? '1';

  const url = useMemo(
    () => `${location.pathname.replace('/vendas', '')}${location.search}`,
    [location.pathname, location.search]
  );

  const { lands, lastPage, prevPage, nextPage, isLoading } =
    useSearchLands(url);

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = {
      page: String(newPage),
      size: '20',
    };

    setSearchParams(params);
  };

  return (
    <>
      <SEO
        title={`Terrenos à Venda em ${city} - ${state}`}
        description={`Encontre terrenos à venda em ${city}. Filtre por preço, área e localização. Dados atualizados diariamente para garantir precisão!`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement:
            !isLoading &&
            lands?.map(({ title, slug }, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'RealEstateListing',
                name: title,
                url: `${location.pathname}/${slug}`,
              },
            })),
        }}
      />

      <div className="grid grid-cols-1 gap-4">
        {!isLoading && error && (
          <Text size="2xl" color="danger-900" weight="medium" align="center">
            {error}
          </Text>
        )}

        {!isLoading &&
          lands?.map((item) => <LandCard key={item.id} item={item} />)}

        {isLoading &&
          skeletons?.map((item) => (
            <Skeleton key={item} width="100%" height={231} borderRadius={12} />
          ))}

        <div className="flex justify-center items-center gap-4 mt-8 mb-12">
          <Button
            onClick={() => handlePageChange(prevPage)}
            disabled={!prevPage}
            variant="tertiary"
          >
            Anterior
          </Button>

          <Text className="mx-4">
            Página {page} de {lastPage || '1'}
          </Text>

          <Button
            onClick={() => handlePageChange(nextPage)}
            disabled={page >= nextPage}
            variant="tertiary"
          >
            Próximo
          </Button>
        </div>
      </div>
    </>
  );
};
