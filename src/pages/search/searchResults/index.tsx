import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';

import { Skeleton, Text } from '@/components';
import { landList } from '@/data';
import { ILand, ISearchForm } from '@/types';
import { generateArray, wait } from '@/utils';

import { paramConfigs } from '../searchForm/helpers';
import { LandCard } from './landCard';

export const SearchResults = () => {
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
    <div className="grid grid-cols-1 gap-4">
      {!loading && error && (
        <Text size="2xl" color="danger-900" weight="medium" align="center">
          {error}
        </Text>
      )}

      {!loading &&
        lands.map((item) => <LandCard key={item.code} item={item} />)}

      {loading &&
        skeletons.map((item) => (
          <Skeleton key={item} width="100%" height={231} borderRadius={12} />
        ))}
    </div>
  );
};
