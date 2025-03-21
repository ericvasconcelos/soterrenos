import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';

import { Skeleton, Text } from '@/components';
import { ILand, ISearchForm } from '@/types';
import { generateArray, wait } from '@/utils';
import { lands } from '@/utils/lands';

import { paramConfigs } from '../searchForm/helpers';
import { SearchCard } from './card';

export const SearchResults = () => {
  const { state, city, neighborhood } = useParams();
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<ILand[]>(lands);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const skeletons = generateArray(6);

  useEffect(() => {
    const fetchProperties = async () => {
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

        const { data } = await axios.get<ILand[]>('/api/properties', {
          params: filters,
        });

        if (Array.isArray(data)) setProperties(data);
        // throw new Error('Problema no servidor');
      } catch (error) {
        setError(`Erro na busca: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [state, city, neighborhood, searchParams]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {!loading && error && (
        <Text size="2xl" color="danger-900" weight="medium" align="center">
          {error}
        </Text>
      )}

      {!loading &&
        properties.map((item) => <SearchCard key={item.code} item={item} />)}

      {loading &&
        skeletons.map((item) => (
          <Skeleton key={item} width="100%" height={231} borderRadius={12} />
        ))}
    </div>
  );
};
