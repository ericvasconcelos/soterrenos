import { Divider, LandCard, Text } from '@/components';
import { initialLands } from '@/utils/lands';

export const Similars = () => (
  <div className="mb-16">
    <Divider space="xl" />

    <Text size="2xl" weight="bold" className="mb-6">
      Encontre terrenos similares
    </Text>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {initialLands.slice(0, 8).map((infos) => (
        <LandCard {...infos} />
      ))}
    </div>
  </div>
);
