import { LandCard, Skeleton, Text } from '@/components';
import { generateArray } from '@/utils';

import { useLandListByCity } from './hooks/useLandListByCity';

export const Nearby = () => {
  const fakeList = generateArray(8);
  const { lands, loading } = useLandListByCity();

  return (
    <>
      <Text size="2xl" weight="bold" className="mb-8">
        Terrenos na sua cidade
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading &&
          lands.length === 0 &&
          fakeList.map((item) => <Skeleton key={item} name="card" />)}

        {!loading &&
          lands.length > 0 &&
          lands.map((item) => <LandCard key={item.id} {...item} />)}
      </div>
    </>
  );
};
