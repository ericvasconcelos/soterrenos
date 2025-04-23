import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import axios from 'axios';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import {
  Button,
  Card,
  Checkbox,
  Divider,
  FieldController,
  Icon,
  Input,
  RadioFields,
  Select,
  Switch,
  Text,
  Textarea,
  VideoPlayer,
} from '@/components';
import {
  commonAreasOptions,
  publicTransportationOptions,
  slopeOptions,
  soilOptions,
  states,
  sunPositionOptions,
  zoningOptions,
} from '@/data';
import { GOOGLE_MAPS_API_KEY } from '@/envs';
import { deleteFile, uploadFile } from '@/services/file';
import { ILand } from '@/types';
import { filterMoneyMask, filterZipCode, sanitizePrice } from '@/utils';

import { useCreateLand, useUpdateLand } from '../hooks';
import { SellerInfos } from '../sellerInfos';
import {
  extractFileName,
  getImagesSplited,
  initialCondominiumInfos,
  normalizeLand,
} from './helpers';
import { ICreateFormData, ICreateLandPayload } from './schema';
import { useCreateForm } from './useCreateForm';

interface ICreatedAdForm {
  defaultValues?: ILand;
}

export const CreateAdForm = ({ defaultValues }: ICreatedAdForm) => {
  const { id } = useParams();
  const [imageError, setImageError] = useState('');
  const [geolocation, setGeolocation] = useState<number[] | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useCreateForm();

  useEffect(() => {
    const initialValues = normalizeLand(defaultValues);
    reset(initialValues);
  }, [defaultValues, reset]);

  const { mutateAsync: createLand } = useCreateLand();
  const { mutateAsync: updateLand } = useUpdateLand();

  const zipCode = watch('address.zipCode');
  const imageList = watch('images');
  const videoUrl = watch('videoUrl');
  const hasCondominium = !!watch('address.condominium');

  const handleImageUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (!files || !files.length) return;

      const newImages = [...(imageList || [])];

      for (const file of Array.from(files)) {
        if (file.size > 1 * (1024 * 1024)) {
          setImageError('Tamanho máximo de 200KB excedido');
          continue;
        }

        newImages.push({
          src: URL.createObjectURL(file),
          file: file,
          featured: false,
        });

        setValue('images', newImages, {
          shouldValidate: true,
        });
      }
    },
    [imageList, setValue]
  );

  const handleSetFeatured = useCallback(
    (imageSrc: string) => {
      const updatedImages = imageList?.map((img) => ({
        ...img,
        featured: img.src === imageSrc,
      }));

      setValue('images', updatedImages, {
        shouldValidate: true,
      });
    },
    [imageList, setValue]
  );

  const handleRemoveImage = useCallback(
    (imageSrc: string) => {
      const updatedImages = imageList?.filter(({ src }) => src !== imageSrc);
      setValue('images', updatedImages, {
        shouldValidate: true,
      });
    },
    [imageList, setValue]
  );

  const fetchCoordinates = useCallback(async (zipCodeAddress: string) => {
    setGeolocation(null);

    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCodeAddress}&key=${GOOGLE_MAPS_API_KEY}`
      );

      if (data.status === 'OK' && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setGeolocation([parseFloat(lat), parseFloat(lng)]);
      } else {
        toast.error(
          'Não encontramos as coordenadas do CEP para mostrar o mapa'
        );
        return;
      }
    } catch (error) {
      console.log('error', error);
      toast.error(`Erro ao buscar coordenadas: ${error}`);
      return;
    }
  }, []);

  useEffect(() => {
    if (zipCode?.length === 9) {
      fetchCoordinates(zipCode);
    }
  }, [zipCode, fetchCoordinates]);

  const onSubmit = useCallback(
    async (formData: ICreateFormData) => {
      const { price, propertyTax, condominiumTax, images, ...rest } = formData;
      const initial = defaultValues?.images ?? [];
      const current = images ?? [];

      const { toUpload, toDelete, unchanged } = getImagesSplited(
        initial,
        current
      );

      const uploadedImages = await Promise.all(
        toUpload?.map(async ({ file }) => {
          try {
            return await uploadFile(file!);
          } catch (error) {
            toast.error(error as string);
            return null;
          }
        })
      );

      await Promise.all(
        toDelete?.map(async ({ src }) => {
          try {
            const fileName = extractFileName(src);
            return await deleteFile(fileName);
          } catch (error) {
            toast.error(error as string);
            return null;
          }
        })
      );

      const finalImages = [
        ...unchanged,
        ...uploadedImages.map((img) => ({
          src: img?.src || '',
          alt: extractFileName(img?.fileName || ''),
          width: img?.width,
          height: img?.height,
          featured:
            current.find((i) => i.file?.name === img?.fileName)?.featured ||
            false,
        })),
      ];

      const landData: ICreateLandPayload = {
        ...rest,
        images: finalImages,
        address: {
          ...rest.address,
          lat: geolocation?.[0],
          lng: geolocation?.[1],
        },
        price: sanitizePrice(price),
        ...(propertyTax && { propertyTax: sanitizePrice(propertyTax) }),
        ...(condominiumTax && {
          condominiumTax: sanitizePrice(condominiumTax),
        }),
        // if doesn't have a condominium
        ...(!rest.address.condominium && { ...initialCondominiumInfos }),
      };

      if (id === 'novo') {
        await createLand(landData);
      } else {
        await updateLand(landData);
      }
    },
    [defaultValues?.images, geolocation, id, createLand, updateLand]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Informações Básicas
        </Text>

        <FieldController
          component={Switch}
          control={control}
          id="active"
          name="active"
          labelActive="Anúncio ativado"
          labelInactive="Anúncio inativado"
          className="mb-6"
        />

        <div className="grid gap-4">
          <FieldController
            component={Input}
            control={control}
            id="title"
            name="title"
            label="Título do Anúncio"
          />

          <FieldController
            component={Textarea}
            control={control}
            id="description"
            name="description"
            label="Descrição do Anúncio"
            rows={8}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_2fr] gap-4">
            <FieldController
              component={Input}
              control={control}
              id="price"
              name="price"
              label="Valor do Terreno (R$)"
              filterValue={filterMoneyMask}
            />

            <FieldController
              component={Input}
              control={control}
              id="propertyTax"
              name="propertyTax"
              label="Valor do IPTU (R$)"
              filterValue={filterMoneyMask}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
              <FieldController
                component={Checkbox}
                control={control}
                id="financingAvailable"
                name="financingAvailable"
                content="Aceita financiamento?"
              />

              <FieldController
                component={Checkbox}
                control={control}
                id="fgts"
                name="fgts"
                content="Aceita FGTS?"
              />
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Video e Imagens
        </Text>

        <div>
          <FieldController
            component={Input}
            control={control}
            id="videoUrl"
            name="videoUrl"
            type="url"
            label="Link do vídeo do YouTube"
            className="mb-4"
          />

          {videoUrl && (
            <div className="max-w-[500px]">
              <VideoPlayer url={videoUrl} />
            </div>
          )}
        </div>

        <Divider />

        <label
          htmlFor="upload-images"
          className="flex flex-col justify-center items-center gap-8 border-2 border-dashed border-gray-400 rounded-lg px-4 py-8 cursor-pointer"
        >
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            accept="image/*"
            max={10}
            className="hidden"
            id="upload-images"
          />

          <Text size="xl" weight="medium">
            Solte suas imagens
          </Text>

          <Button
            type="button"
            variant="secondary"
            color="primary"
            onClick={() => document.getElementById('upload-images')?.click()}
          >
            Buscar arquivos
          </Button>
        </label>
        <Text size="sm" color="gray-600" className="mt-2">
          ** Limite máximo do tamanho de imagens de 200kb
        </Text>
        {imageError && (
          <Text color="danger-700" className="mt-2">
            {imageError}
          </Text>
        )}
        {errors.images && (
          <Text color="danger-700" className="mt-2">
            {errors.images.message}
          </Text>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {imageList?.map((image, index) => (
            <div key={image.src} className="relative">
              <img
                src={image.src}
                alt={`Preview ${index}`}
                className="h-48 w-full object-cover rounded"
              />

              <button
                type="button"
                onClick={() => handleRemoveImage(image.src)}
                className="absolute top-2 right-2 bg-primary-100 rounded-full p-1 cursor-pointer"
              >
                <Icon name="x-mark" color="primary" />
              </button>

              <div className="absolute bottom-2 left-2 bg-white rounded-sm px-2 py-1">
                <Checkbox
                  id="featured"
                  content="Principal"
                  checked={image.featured}
                  value={image.featured}
                  onChange={() => handleSetFeatured(image.src)}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Endereço completo
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldController
            component={Input}
            control={control}
            id="address.zipCode"
            name="address.zipCode"
            label="CEP"
            filterValue={filterZipCode}
          />

          <FieldController
            component={Input}
            control={control}
            id="address.street"
            name="address.street"
            label="Logradouro (Rua, Avenida e etc)"
          />

          <FieldController
            component={Input}
            control={control}
            id="address.number"
            name="address.number"
            label="Número"
          />

          <FieldController
            component={Input}
            control={control}
            id="address.complement"
            name="address.complement"
            label="Complemento"
          />

          <FieldController
            component={Input}
            control={control}
            id="address.neighborhood"
            name="address.neighborhood"
            label="Bairro"
          />

          <FieldController
            component={Input}
            control={control}
            id="address.city"
            name="address.city"
            label="Cidade"
          />

          <FieldController
            component={Select}
            control={control}
            id="address.state"
            name="address.state"
            label="Estado"
            options={states}
          />

          <FieldController
            component={Input}
            control={control}
            id="address.condominium"
            name="address.condominium"
            label="Nome do Condomínio"
          />

          {hasCondominium && (
            <FieldController
              component={Input}
              control={control}
              id="condominiumTax"
              name="condominiumTax"
              label="Taxa do Condomínio (R$)"
              filterValue={filterMoneyMask}
            />
          )}
        </div>

        {geolocation && (
          <div className="w-full h-[400px] rounded-xl overflow-hidden mt-6">
            <APIProvider apiKey={GOOGLE_MAPS_API_KEY} region="BR">
              <Map
                mapId="58bda79ff82ab6f4"
                style={{ width: '100%', height: '100%' }}
                defaultCenter={{ lat: geolocation[0], lng: geolocation[1] }}
                zoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
              >
                <AdvancedMarker
                  position={{ lat: geolocation[0], lng: geolocation[1] }}
                >
                  <Pin
                    background="#8b83c5"
                    glyphColor="#513e9f"
                    borderColor="#513e9f"
                  />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>
        )}
      </Card>

      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Dimensões do Terreno (metros)
        </Text>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <FieldController
            component={Input}
            control={control}
            id="landSize.front"
            name="landSize.front"
            label="Frente"
            type="number"
          />

          <FieldController
            component={Input}
            control={control}
            id="landSize.left"
            name="landSize.left"
            label="Esquerda"
            type="number"
          />

          <FieldController
            component={Input}
            control={control}
            id="landSize.right"
            name="landSize.right"
            label="Direta"
            type="number"
          />

          <FieldController
            component={Input}
            control={control}
            id="landSize.back"
            name="landSize.back"
            label="Fundos"
            type="number"
          />
        </div>
      </Card>

      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Características do Terreno
        </Text>

        <div className="grid sm:grid-cols-2 gap-4">
          <FieldController
            component={RadioFields}
            control={control}
            name="soil"
            title="Tipo de Solo"
            options={soilOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            name="slope"
            title="Inclinação"
            options={slopeOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            name="zoning"
            title="Zoneamento"
            options={zoningOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            name="sunPosition"
            title="Posição do Sol"
            options={sunPositionOptions}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <FieldController
            component={Checkbox}
            control={control}
            id="hasWater"
            name="hasWater"
            content="Água encanada"
          />

          <FieldController
            component={Checkbox}
            control={control}
            id="hasArtesianWell"
            name="hasArtesianWell"
            content="Poço artesiano"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="hasSewageSystem"
            name="hasSewageSystem"
            content="Rede de esgoto"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="hasEletricity"
            name="hasEletricity"
            content="Energia elétrica"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="isFenced"
            name="isFenced"
            content="Murado"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="isLandLeveled"
            name="isLandLeveled"
            content="Terraplanagem Feita"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="isLotClear"
            name="isLotClear"
            content="Terreno limpo"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="hasInternet"
            name="hasInternet"
            content="Internet"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="hasGas"
            name="hasGas"
            content="Gás encamado"
            className="mb-4"
          />
        </div>
      </Card>

      {hasCondominium && (
        <Card>
          <Text tag="h2" size="xl" weight="bold" className="mb-4">
            Infraestrutura do Condomínio
          </Text>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <FieldController
              control={control}
              component={Checkbox}
              id="established"
              name="established"
              content="Condomínio Formado"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="paved"
              name="paved"
              content="Rua Asfaltada"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="streetLighting"
              name="streetLighting"
              content="Iluminação na rua"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="sanitationBasic"
              name="sanitationBasic"
              content="Saneamento Básico"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="sidewalks"
              name="sidewalks"
              content="Calçadas"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="gatedEntrance"
              name="gatedEntrance"
              content="Portaria"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="security"
              name="security"
              content="Segurança 24h"
            />
          </div>

          <Text size="sm" weight="medium" className="mt-8 mb-2">
            Áreas comuns
          </Text>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {commonAreasOptions?.map((option) => (
              <Controller
                key={option.value}
                name="commonAreas"
                control={control}
                render={({ field }) => {
                  const checked = field?.value?.includes(option.value);
                  return (
                    <Checkbox
                      content={option.label}
                      value={checked}
                      checked={checked}
                      onChange={(e) => {
                        let newValue: string[] = [];

                        if (e.target.checked) {
                          const currentValue = (field?.value ?? '') as string;
                          newValue = [...currentValue, option.value];
                        } else {
                          newValue = (field?.value as string[]).filter(
                            (v: string) => v !== option?.value
                          );
                        }

                        field.onChange(newValue);
                      }}
                    />
                  );
                }}
              />
            ))}
          </div>
        </Card>
      )}

      <Card>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          O que existe nas proximidades
        </Text>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <FieldController
            control={control}
            component={Checkbox}
            id="restaurant"
            name="restaurant"
            content="Restaurante"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="school"
            name="school"
            content="Escola"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="hospital"
            name="hospital"
            content="Hospital / Posto de Saúde"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="supermarket"
            name="supermarket"
            content="Supermercado"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="drugstore"
            name="drugstore"
            content="Farmácia"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="gasStation"
            name="gasStation"
            content="Posto de Gasolina"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="bank"
            name="bank"
            content="Banco"
          />
        </div>

        <Text size="sm" weight="medium" className="mt-8 mb-2">
          Transporte Público
        </Text>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {publicTransportationOptions?.map((option) => (
            <Controller
              key={option.value}
              name="publicTransportation"
              control={control}
              render={({ field }) => (
                <Checkbox
                  content={option.label}
                  value={field?.value?.includes(option.value)}
                  checked={field?.value?.includes(option.value)}
                  onChange={(e) => {
                    let newValue: string[] = [];

                    if (e.target.checked) {
                      const currentValue = (field?.value ?? '') as string;
                      newValue = [...currentValue, option.value];
                    } else {
                      newValue = (field?.value as string[]).filter(
                        (v: string) => v !== option?.value
                      );
                    }

                    field.onChange(newValue);
                  }}
                />
              )}
            />
          ))}
        </div>
      </Card>

      <SellerInfos />

      <div className="flex justify-end mb-20">
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          isLoading={isSubmitting}
        >
          Publicar Anúncio
        </Button>
      </div>
    </form>
  );
};
