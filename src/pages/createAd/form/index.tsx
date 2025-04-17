import { ChangeEvent, useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import {
  Button,
  Card,
  Checkbox,
  FieldController,
  Icon,
  Input,
  RadioFields,
  Select,
  Switch,
  Text,
  Textarea,
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
import { uploadImages } from '@/services/file';
import { filterMoneyMask, sanitizePrice } from '@/utils';

import { useCreateLand } from '../hooks';
import { SellerInfos } from '../sellerInfos';
import { ICreateFormData, ICreateLandPayload } from './schema';
import { useCreateForm } from './useCreateForm';

export const CreateAdForm = () => {
  const [uploadProgress] = useState<Record<string, number>>({});
  const [, setUploadErrors] = useState<Record<string, string>>({});

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useCreateForm();

  const { mutateAsync: createLand } = useCreateLand();

  const imageList = watch('images');
  const hasCondominium = !!watch('address.condominium');

  const handleImageUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (!files || !files.length) return;

      await uploadImages(files[0]);

      const newImages = [...(imageList || [])];

      for (const file of Array.from(files)) {
        if (file.size > 200 * 1024) {
          setUploadErrors((prev) => ({
            ...prev,
            [file.name]: 'Tamanho máximo de 200KB excedido',
          }));
          continue;
        }

        const fileId = uuidv4();
        const fileName = `images/${fileId}-${file.name}`;

        newImages.push({
          id: fileId,
          src: URL.createObjectURL(file),
          featured: false,
          type: file.type,
          size: file.size,
          uploadStatus: 'uploading',
          fileName, // Armazenamos o nome do arquivo para referência
        });

        setValue('images', newImages);
      }
    },
    [imageList, setValue]
  );

  const handleSetFeatured = useCallback(
    (imageId: string) => {
      const updatedImages = imageList?.map((img) => ({
        ...img,
        featured: img.id === imageId,
      }));
      setValue('images', updatedImages);
    },
    [imageList, setValue]
  );

  const handleRemoveImage = useCallback(
    (imgId: string) => {
      const updatedImages = imageList?.filter(({ id }) => id !== imgId);
      setValue('images', updatedImages);
    },
    [imageList, setValue]
  );

  const onSubmit = useCallback(
    async (formData: ICreateFormData) => {
      const { price, propertyTax, condominiumTax, ...rest } = formData;

      const landData: ICreateLandPayload = {
        ...rest,
        price: sanitizePrice(price),
        ...(propertyTax && {
          propertyTax: sanitizePrice(propertyTax),
        }),
        ...(condominiumTax && {
          condominiumTax: sanitizePrice(condominiumTax),
        }),
        images: [
          {
            src: 'http://www.anuncios/images/4355127664.jpg',
            width: 500,
            height: 559,
            alt: 'Alt da imagem',
          },
        ],
      };

      await createLand(landData);
    },
    [createLand]
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

          <div className="grid grid-cols-[1fr_1fr_2fr] gap-4">
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

            <div className="grid grid-cols-2 gap-4 pt-4">
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
          Imagens
        </Text>

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

        <div className="grid grid-cols-4 gap-4 mt-4">
          {imageList?.map((image, index) => (
            <div key={image.id} className="relative">
              <img
                src={image.src}
                alt={`Preview ${index}`}
                className="h-40 w-full object-cover rounded"
              />

              <button
                type="button"
                onClick={() => handleRemoveImage(image.id)}
                className="absolute top-2 right-2 bg-primary-100 rounded-full p-1 cursor-pointer"
              >
                <Icon name="x-mark" color="primary" />
              </button>

              <div className="absolute bottom-2 left-2 bg-white rounded-sm px-2 py-1">
                <Checkbox
                  id="featured"
                  content="Principal"
                  checked={image.featured}
                  onChange={() => handleSetFeatured(image.id)}
                />
              </div>

              {image.uploadStatus === 'uploading' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress[image.id] || 0}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {errors.images && (
          <Text color="danger-700" className="mt-2">
            {errors.images.message}
          </Text>
        )}
      </Card>

      <Card hasShadow>
        <Text tag="h2" size="xl" weight="bold" className="mb-4">
          Endereço completo
        </Text>

        <div className="grid grid-cols-2 gap-4">
          <FieldController
            component={Input}
            control={control}
            id="address.zipCode"
            name="address.zipCode"
            label="CEP"
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

        <div className="grid grid-cols-2 gap-4">
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
            {commonAreasOptions.map((option) => (
              <Controller
                key={option.value}
                name="commonAreas"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    content={option.label}
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
          {publicTransportationOptions.map((option) => (
            <Controller
              key={option.value}
              name="publicTransportation"
              control={control}
              render={({ field }) => (
                <Checkbox
                  content={option.label}
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
