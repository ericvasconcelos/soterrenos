import { FC } from 'react';

import { Card, Text } from '@/components';
import { formatAddress, getTotalArea, priceFormatter } from '@/utils';

import { ILandCard } from './types';

export const LandCard: FC<ILandCard> = ({ item }) => {
  const totalArea = getTotalArea(item.landSize);
  return (
    <Card
      padding="none"
      hasShadow
      className="grid lg:grid-cols-[240px_auto] xl:grid-cols-[280px_auto] 2xl:grid-cols-[300px_auto]"
    >
      <img
        src={item.images[0].src}
        width={item.images[0].width}
        height={item.images[0].height}
        alt={item.images[0].alt}
        className="w-full h-full object-cover"
      />

      <div className="p-4">
        <Text tag="h1" size="xl" weight="bold" className="mb-1">
          {item.title}
        </Text>

        <Text color="primary-700" size="xl" weight="bold" className="mb-1">
          {priceFormatter(item.price)}
        </Text>

        <Text color="gray-700" size="sm" className="mb-1">
          Valor/m²: {priceFormatter(item.price / totalArea.value)}
        </Text>

        <Text color="gray-700" size="sm" className="mb-1">
          IPTU: {priceFormatter(item.propertyTax)}
        </Text>

        <Text color="gray-700" size="sm" className="mb-1">
          Condomínio: {priceFormatter(item.condominiumTax)}
        </Text>

        <Text color="gray-700" size="sm" className="mb-1">
          Área total: {totalArea.text}
        </Text>

        <Text color="gray-700" size="sm" className="mb-1">
          {formatAddress(item.address)}
        </Text>
      </div>
    </Card>
  );
};
