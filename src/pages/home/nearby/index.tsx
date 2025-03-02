import { Button, Card, Skeleton, Text } from '@/components';
import { generateArray, getTotalArea, priceFormatter } from '@/utils';

import { useLandListByCity } from './hooks/useLandListByCity';

export const Nearby = () => {
  const fakeList = generateArray(8);
  const { lands, loading } = useLandListByCity();

  return (
    <div className="mt-16 mb-16">
      <Text size="2xl" weight="bold" className="mb-8">
        Terrenos na sua cidade
      </Text>

      <div className="grid grid-cols-4 gap-6">
        {loading &&
          lands.length === 0 &&
          fakeList.map((item) => <Skeleton key={item} name="card" />)}

        {!loading &&
          lands.length > 0 &&
          lands.map((item) => (
            <Card key={item.code} padding="none" hasShadow>
              <img
                src={item.images[0].src}
                width={item.images[0].width}
                height={item.images[0].height}
                alt={item.images[0].alt}
                className="w-full"
              />

              <div className="p-4">
                <Text
                  color="primary-700"
                  size="2xl"
                  weight="bold"
                  className="mb-2"
                >
                  {priceFormatter(item.price)}
                </Text>

                <Text color="gray-700" size="sm" className="mb-8">
                  {getTotalArea(item.landSize).text} -{' '}
                  {item.address.neighborhood}, {item.address.city}
                </Text>

                <Button isFull variant="secondary">
                  Ver Terreno
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
};
