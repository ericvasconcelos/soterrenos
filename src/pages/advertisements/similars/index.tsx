import { Divider, LandCard, MatchNotFound, Skeleton, Text } from '@/components';
import { useLandList } from '@/hooks/useLandList';
import { generateArray } from '@/utils';

export const Similars = () => {
  const fakeList = generateArray(8);
  const { data, isLoading } = useLandList({ size: 8 });

  return (
    <div className="mb-16">
      <Divider space="xl" />

      <Text size="2xl" weight="bold" className="mb-6">
        Encontre terrenos similares
      </Text>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading &&
          !data &&
          fakeList.map((item) => <Skeleton key={item} name="card" />)}

        {!isLoading &&
          data &&
          data?.length > 0 &&
          data.map((item) => <LandCard key={item.id} {...item} />)}
      </div>

      {!isLoading && !data && (
        <MatchNotFound title="Infelizmente não encontramos terrenos perto de você" />
      )}
    </div>
  );
};
