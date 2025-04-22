import { FC, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { Card, Text } from '@/components';
import { formatAddress, getTotalArea, priceFormatter } from '@/utils';

import { ILandCard } from './types';

export const LandCard: FC<ILandCard> = ({ item }) => {
  const totalArea = getTotalArea(item.landSize);

  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/anuncios/${item?.id}/${item?.slug}`);
  }, [navigate, item?.id, item?.slug]);

  const featuredImage = useMemo(() => {
    const featured = item?.images.find((image) => image.featured);
    if (featured) return featured;
    return item?.images?.[0];
  }, [item?.images]);

  return (
    <Card
      padding="none"
      hasShadow
      className="grid lg:grid-cols-[240px_auto] xl:grid-cols-[280px_auto] 2xl:grid-cols-[300px_auto] cursor-pointer outline-black"
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
    >
      <img
        src={featuredImage?.src}
        width={featuredImage?.width}
        height={featuredImage?.height}
        alt={featuredImage?.alt}
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
