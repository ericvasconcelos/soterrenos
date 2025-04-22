import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { getTotalArea, priceFormatter } from '@/utils';

import { Button } from '../Button';
import { Card } from '../Card';
import { Text } from '../Text';
import { ILandCard } from './types';

export const LandCard = ({
  type = 'infos',
  id,
  slug,
  images,
  price,
  landSize,
  address,
}: ILandCard) => {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    const link =
      type === 'edit' ? `/cadastro-anuncio/${id}` : `/anuncios/${id}/${slug}`;
    navigate(link);
  }, [id, navigate, type, slug]);

  const featuredImage = useMemo(() => {
    const featured = images.find((image) => image.featured);
    if (featured) return featured;
    return images?.[0];
  }, [images]);

  return (
    <Card
      hasShadow
      padding="none"
      className="cursor-pointer outline-black"
      role="button"
      tabIndex={0}
      onClick={handleNavigate}
    >
      <div className="h-[200px]">
        <img
          src={featuredImage?.src}
          width={featuredImage?.width}
          height={featuredImage?.height}
          alt={featuredImage?.alt || `Imagem do anúncio ${id}`}
          className="block w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <Text color="primary-700" size="2xl" weight="bold" className="mb-2">
          {priceFormatter(price)}
        </Text>

        <Text color="gray-700" size="sm" className="mb-8">
          {getTotalArea(landSize).text} - {address.neighborhood}, {address.city}
        </Text>

        <Button isFull variant="secondary">
          Ver Terreno
        </Button>
      </div>
    </Card>
  );
};
