import { useCallback } from 'react';
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
      type === 'edit' ? `/criar-anuncio/${id}` : `/anuncios/${id}/${slug}`;
    navigate(link);
  }, [id, navigate, type, slug]);

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
          src={images[0].src}
          width={images[0].width}
          height={images[0].height}
          alt={images[0].alt || `Imagem do anúncio ${id}`}
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
