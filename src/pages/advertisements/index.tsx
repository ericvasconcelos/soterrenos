import dayjs from 'dayjs';
import { lazy, Suspense, useState } from 'react';
import { useParams } from 'react-router';

import {
  Button,
  Container,
  Divider,
  Icon,
  ImageGallery,
  Skeleton,
  Text,
  Tooltip,
} from '@/components';
import { SEO } from '@/layouts/Seo';
import { getTotalArea, priceFormatter } from '@/utils';

import { useFetchLand } from '../../hooks/useLand';
import { AdSkeleton } from './adSkeleton';
import { Location } from './location';
import { ModalShare } from './modalShare';

const Infos = lazy(() =>
  import('./infos').then((module) => ({ default: module.Infos }))
);

const SellersContactForm = lazy(() =>
  import('./sellersContactForm').then((module) => ({
    default: module.SellersContactForm,
  }))
);

const Similars = lazy(() =>
  import('./similars').then((module) => ({ default: module.Similars }))
);

export default function Advertisements() {
  const { id } = useParams();
  const { data, isLoading } = useFetchLand(id);
  const [isModalShareOpen, setIsModalShareOpen] = useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const totalArea = getTotalArea(data?.landSize);

  const description = `Compre Terreno em ${data?.address.neighborhood}, ${data?.address.city} - ${data?.address.state}. Área de ${totalArea.text}, [Características Relevantes]. Informações verificadas e atualizadas. Faça um contato direto com o vendedor`;

  return (
    <>
      <SEO
        title={`Terreno à venda de ${totalArea.text} em ${data?.address.neighborhood}, ${data?.address.city} -  ${data?.address.state}`}
        description={description}
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'RealEstateListing',
          name: `${data?.title}`,
          description: `${description}`,
          url: '[URL dinâmica do anúncio]',
          listingStatus: 'ForSale',
          address: {
            '@type': 'PostalAddress',
            addressLocality: `${data?.address.city}`,
            addressRegion: `${data?.address.state}`,
            addressNeighborhood: `${data?.address.neighborhood}`,
          },
          price: `${priceFormatter(data?.price)}`,
          priceCurrency: 'BRL',
          size: `${totalArea.text}`,
          image: `${data?.images[0].src}`,
        }}
      />

      <Container>
        {isLoading && !data && <AdSkeleton />}

        {!isLoading && data && (
          <>
            <div className="flex items-center justify-between gap-4 my-5">
              <Text tag="h1" size="2xl" weight="medium">
                {data?.title}
              </Text>

              <div className="flex items-center justify-end">
                <Button
                  variant="tertiary"
                  color="primary"
                  size="small"
                  icon="share"
                  iconPosition="left"
                  onClick={() => setIsModalShareOpen(true)}
                >
                  <span className="hidden md:inline">Compartilhar</span>
                </Button>

                {/* <Button
              variant="tertiary"
              color="primary"
              size="small"
              icon={isSaved ? 'heart-filled' : 'heart'}
              iconPosition="left"
              onClick={() => setIsSaved(!isSaved)}
            >
              <span className="hidden md:inline">
                {isSaved ? 'Salvo' : 'Salvar'}
              </span>
            </Button> */}
              </div>
            </div>

            <div className="relative">
              {data && !data?.active && (
                <div className="absolute top-5 right-0 px-5 py-2 text-white font-bold text-lg bg-red-700 rounded-l-xl">
                  Anúncio Inativo
                </div>
              )}

              <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-[180px_180px] xl:grid-rows-[250px_250px] gap-4 mb-8">
                <div
                  className="flex items-center justify-center col-span-2 row-span-2 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onClick={() => openModal(0)}
                >
                  <img
                    src={data?.images[0].src}
                    width={data?.images[0].width}
                    height={data?.images[0].height}
                    alt={`${data?.title} - Imagem Principal`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {data?.images.slice(1, 5).map((image, index) => (
                  <div
                    key={index}
                    className="hidden lg:flex items-center justify-center cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => openModal(index + 1)}
                  >
                    <img
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt={`${data?.title} - Imagem ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_280px] lg:grid-cols-[auto_360px] xl:grid-cols-[auto_420px] gap-4 lg:gap-6 xl:gap-8">
              <div>
                {data?.address && <Location address={data?.address} />}

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="xl:flex xl:items-end gap-2">
                    <Text size="sm" className="xl:mb-[3px]">
                      Valor:
                    </Text>
                    <Text
                      color="primary-700"
                      size="2xl"
                      weight="bold"
                      className="tracking-tight"
                    >
                      {priceFormatter(data?.price)}
                    </Text>
                  </div>

                  <Tooltip
                    align="start"
                    content={`Frente: ${data?.landSize?.front}m
                  Lado esquerdo: ${data?.landSize?.left}m
                  Lado direito: ${data?.landSize?.right}m
                  Fundos: ${data?.landSize?.back}m
                `}
                    aria-label="Medidas do terreno"
                  >
                    <div className="xl:flex xl:items-end gap-2">
                      <Text size="sm" className="flex gap-1 mb-[3px]">
                        Área Total:
                        <Icon
                          name="information-circle"
                          size={18}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </Text>
                      <Text
                        color="primary-700"
                        size="2xl"
                        weight="bold"
                        className="tracking-tight"
                      >
                        {totalArea.text}
                      </Text>
                    </div>
                  </Tooltip>

                  <div className="xl:flex xl:items-end gap-2">
                    <Text size="sm" className="xl:mb-[3px]">
                      Valor por m²:
                    </Text>
                    <Text
                      color="primary-700"
                      size="2xl"
                      weight="bold"
                      className="tracking-tight"
                    >
                      {priceFormatter((data?.price || 0) / totalArea.value)}
                    </Text>
                  </div>

                  <div className="xl:flex xl:items-end gap-2">
                    <Text size="sm" className="xl:mb-[3px]">
                      IPTU:
                    </Text>
                    <Text
                      color="primary-700"
                      size="2xl"
                      weight="bold"
                      className="tracking-tight"
                    >
                      {typeof data?.propertyTax === 'number' &&
                      data?.propertyTax > 0
                        ? priceFormatter(data?.propertyTax)
                        : 'Não possui'}
                    </Text>
                  </div>

                  <div className="xl:flex xl:items-end gap-2">
                    <Text size="sm" className="xl:mb-[3px]">
                      Condomínio:
                    </Text>
                    <Text
                      color="primary-700"
                      size="2xl"
                      weight="bold"
                      className="tracking-tight"
                    >
                      {typeof data?.condominiumTax === 'number' &&
                      data?.condominiumTax > 0
                        ? priceFormatter(data?.condominiumTax)
                        : 'Não possui'}
                    </Text>
                  </div>
                </div>

                <Divider space="xl" />

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                  <Text size="sm">
                    Aceita financiamento:
                    <br className="block xl:hidden" />{' '}
                    {data?.financingAvailable ? 'Sim' : 'Não'}
                  </Text>

                  <Text size="sm">
                    Aceita FGTS:
                    <br className="block xl:hidden" />{' '}
                    {data?.fgts ? 'Sim' : 'Não'}
                  </Text>

                  <Text size="sm">
                    Código do anúncio:
                    <br className="block xl:hidden" /> {data?.id.slice(0, 8)}
                  </Text>

                  <Text size="sm">
                    Última Atualização:
                    <br className="block xl:hidden" />{' '}
                    {dayjs(data?.updatedAt).format('DD/MM/YYYY')}
                  </Text>
                </div>

                <Divider space="xl" />

                <div>
                  <Text
                    tag="h2"
                    size="xl"
                    weight="medium"
                    className="pt-4 mb-8"
                  >
                    Descrição
                  </Text>

                  <p className="whitespace-pre-line">{data?.description}</p>
                </div>

                <Suspense>
                  <Infos />
                </Suspense>
              </div>

              <div className="mt-8 md:mt-0">
                <Suspense fallback={<Skeleton name="card" borderRadius={12} />}>
                  {data?.user && <SellersContactForm {...data?.user} />}
                </Suspense>
              </div>
            </div>

            <Suspense>
              <Similars />
            </Suspense>
          </>
        )}
      </Container>

      <Suspense>
        {currentIndex !== null && data?.images && (
          <ImageGallery
            images={data?.images}
            initialIndex={currentIndex}
            close={closeModal}
            videoUrl={data?.videoUrl}
          />
        )}
      </Suspense>

      <Suspense>
        {isModalShareOpen && !!data && (
          <ModalShare
            isOpen={isModalShareOpen}
            close={() => setIsModalShareOpen(false)}
            price={data?.price}
            landSize={data?.landSize}
            address={data?.address}
          />
        )}
      </Suspense>
    </>
  );
}
