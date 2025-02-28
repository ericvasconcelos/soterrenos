import {
  Container,
  Button,
  ImageGallery,
  Text,
  Divider,
  Icon,
  Tooltip,
} from '@/components';
import { Page } from '@/layouts/Page';
import { data } from './data';
import { useState } from 'react';
import { getTotalArea, priceFormatter } from '@/utils';
import { SellersContactForm } from './sellersContactForm';
import { Similars } from './similars';
import { ModalShare } from './modalShare';
import { Infos } from './infos';
import { Location } from './location';

export default function Advertisements() {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isModalShareOpen, setIsModalShareOpen] = useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const { landSize, active } = data;
  const totalArea: number = getTotalArea(landSize);

  return (
    <Page>
      <Container>
        <div className="flex items-center justify-between gap-4 my-5">
          <Text tag="h1" size="2xl" weight="medium">
            {data.title}
          </Text>

          <div className="flex items-center justify-end">
            <Button
              variant="tertiary"
              color="dark"
              size="small"
              icon="share"
              iconPosition="left"
              onClick={() => setIsModalShareOpen(true)}
            >
              <span className="hidden md:inline">Compartilhar</span>
            </Button>

            <Button
              variant="tertiary"
              color="dark"
              size="small"
              icon={isSaved ? 'heart-filled' : 'heart'}
              iconPosition="left"
              onClick={() => setIsSaved(!isSaved)}
            >
              <span className="hidden md:inline">
                {isSaved ? 'Salvo' : 'Salvar'}
              </span>
            </Button>
          </div>
        </div>

        <div className="relative">
          {!active && (
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
                src={data.images[0].src}
                width={data.images[0].width}
                height={data.images[0].height}
                alt="Foto Principal"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {data.images.slice(1, 5).map((image, index) => (
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
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_280px] lg:grid-cols-[auto_360px] xl:grid-cols-[auto_420px] gap-4 lg:gap-6 xl:gap-8">
          <div>
            <Location />

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
                  {priceFormatter(data.price)}
                </Text>
              </div>

              <Tooltip
                align="start"
                content={`Frente: ${landSize.front}m
                  Lado esquerdo: ${landSize.left}m
                  Lado direito: ${landSize.right}m
                  Fundos: ${landSize.back}m
                `}
              >
                <div className="xl:flex xl:items-end gap-2">
                  <Text size="sm" className="flex gap-1 mb-[3px]">
                    Área Total:
                    <Icon name="information-circle" size={18} strokeWidth={2} />
                  </Text>
                  <Text
                    color="primary-700"
                    size="2xl"
                    weight="bold"
                    className="tracking-tight"
                  >
                    {totalArea}m²
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
                  {priceFormatter(data.price / totalArea)}
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
                  {priceFormatter(data.propertyTax)}
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
                  {priceFormatter(data.condominiumTax)}
                </Text>
              </div>
            </div>

            <Divider space="xl" />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <Text size="sm">
                Aceita financiamento:
                <br className="block xl:hidden" />{' '}
                {data.financingAvailable ? 'Sim' : 'Não'}
              </Text>

              <Text size="sm">
                Código do anúncio:
                <br className="block xl:hidden" /> {data.code}
              </Text>

              <Text size="sm">
                Última Atualização:
                <br className="block xl:hidden" /> {data.lastUpdate}
              </Text>
            </div>

            <Divider space="xl" />

            <div>
              <Text tag="h3" size="xl" weight="medium" className="pt-4 mb-8">
                Descrição
              </Text>

              <p className="whitespace-pre-line">{data.description}</p>
            </div>

            <Infos />
          </div>

          <div className="mt-8 md:mt-0">
            <SellersContactForm />
          </div>
        </div>

        <Similars />
      </Container>

      {currentIndex !== null && (
        <ImageGallery
          images={data.images}
          initialIndex={currentIndex}
          close={closeModal}
        />
      )}

      {isModalShareOpen && (
        <ModalShare
          isOpen={isModalShareOpen}
          close={() => setIsModalShareOpen(false)}
        />
      )}
    </Page>
  );
}
