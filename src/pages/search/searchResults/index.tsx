import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router';

import { Skeleton, Text } from '@/components';
import { landList } from '@/data';
import { SEO } from '@/layouts/Seo';
import { ILand, ISearchForm } from '@/types';
import { generateArray, wait } from '@/utils';

import { paramConfigs } from '../searchForm/helpers';
import { LandCard } from './landCard';

export const SearchResults = () => {
  const location = useLocation();
  const { state, city, neighborhood } = useParams();
  const [searchParams] = useSearchParams();
  const [lands, setLands] = useState<ILand[]>(landList);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const skeletons = generateArray(6);

  const fetchLands = useCallback(async () => {
    setLoading(true);
    await wait(2000);

    try {
      const filters: Partial<Record<keyof ISearchForm, string | boolean>> = {
        state: state || '',
        city: city || '',
        neighborhood: neighborhood || '',
      };

      paramConfigs.forEach(({ name, transform }) => {
        const value = searchParams.get(name);
        filters[name] = transform ? transform(value) : value || '';
      });

      const { data } = await axios.get<ILand[]>('/api/lands', {
        params: filters,
      });

      if (Array.isArray(data)) setLands(data);
      // throw new Error('Problema no servidor');
    } catch (error) {
      setError(`Erro na busca: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [state, city, neighborhood, searchParams]);

  useEffect(() => {
    fetchLands();
  }, [fetchLands]);

  return (
    <>
      <SEO
        title={`Terrenos à Venda em ${neighborhood}, ${city} - ${state}`}
        description={`Encontre terrenos à venda em ${neighborhood}, ${city}. Filtre por preço, área e localização. Dados atualizados diariamente para garantir precisão!`}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement:
            !loading &&
            lands?.map(({ title, url }, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'RealEstateListing',
                name: title,
                url: `${location.pathname}/${url}`,
              },
            })),
        }}
      />

      <div className="grid grid-cols-1 gap-4">
        {!loading && error && (
          <Text size="2xl" color="danger-900" weight="medium" align="center">
            {error}
          </Text>
        )}

        {!loading &&
          lands.map((item) => <LandCard key={item.id} item={item} />)}

        {loading &&
          skeletons.map((item) => (
            <Skeleton key={item} width="100%" height={231} borderRadius={12} />
          ))}
      </div>
    </>
  );
};
