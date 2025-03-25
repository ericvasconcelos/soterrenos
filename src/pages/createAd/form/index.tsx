import { ChangeEvent, useCallback } from 'react';
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
  soilTypeOptions,
  states,
  sunPositionOptions,
  zoningOptions,
} from '@/data';
import { filterMoneyMask, sanitizePrice } from '@/utils';

import { ICreateFormData } from './schema';
import { useCreateForm } from './useCreateForm';

export const CreateAdForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useCreateForm();

  const imageList = watch('images');
  const hasCondominium = !!watch('address.condominium');

  const handleImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      if (!imageList) return;
      const newImages = [...imageList];

      if (files) {
        for (const file of files) {
          newImages.push({
            id: uuidv4(),
            src: URL.createObjectURL(file),
            featured: false,
            type: file.type,
            size: file.size,
          });
        }

        setValue('images', [...imageList, ...newImages]);
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

  const onSubmit = useCallback((formData: ICreateFormData) => {
    const landData = {
      ...formData,
      code: uuidv4(),
      lastUpdate: new Date().toLocaleDateString(),
      price: sanitizePrice(formData.price),
      ...(formData?.propertyTax && {
        propertyTax: sanitizePrice(formData?.propertyTax),
      }),
      ...(formData?.condominiumTax && {
        condominiumTax: sanitizePrice(formData?.condominiumTax),
      }),
    };
    console.log(landData);
  }, []);

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
              label="Preço (R$)"
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
            Solte seus arquivos aqui
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
            id="infos.whatHas.soilType"
            name="infos.whatHas.soilType"
            title="Tipo de Solo"
            options={soilTypeOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            id="infos.whatHas.slope"
            name="infos.whatHas.slope"
            title="Inclinação"
            options={slopeOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            id="infos.whatHas.zoning"
            name="infos.whatHas.zoning"
            title="Zoneamento"
            options={zoningOptions}
          />

          <FieldController
            component={RadioFields}
            control={control}
            id="infos.whatHas.sunPosition"
            name="infos.whatHas.sunPosition"
            title="Posição do Sol"
            options={sunPositionOptions}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <FieldController
            component={Checkbox}
            control={control}
            id="infos.whatHas.hasWater"
            name="infos.whatHas.hasWater"
            content="Água encanada"
          />

          <FieldController
            component={Checkbox}
            control={control}
            id="infos.whatHas.hasArtesianWell"
            name="infos.whatHas.hasArtesianWell"
            content="Poço artesiano"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.whatHas.hasSewageSystem"
            name="infos.whatHas.hasSewageSystem"
            content="Rede de esgoto"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.whatHas.hasEletricity"
            name="infos.whatHas.hasEletricity"
            content="Energia elétrica"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.whatHas.isFenced"
            name="infos.whatHas.isFenced"
            content="Murado"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.whatHas.isLandLeveled"
            name="infos.whatHas.isLandLeveled"
            content="Terraplanagem Feita"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.whatHas.isLotClear"
            name="infos.whatHas.isLotClear"
            content="Terreno limpo"
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
              id="infos.condominiumStatus.established"
              name="infos.condominiumStatus.established"
              content="Condomínio Formado"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.paved"
              name="infos.condominiumStatus.paved"
              content="Rua Asfaltada"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.streetLighting"
              name="infos.condominiumStatus.streetLighting"
              content="Iluminação na rua"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.sanitationBasic"
              name="infos.condominiumStatus.sanitationBasic"
              content="Saneamento Básico"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.sidewalks"
              name="infos.condominiumStatus.sidewalks"
              content="Calçadas"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.gatedEntrance"
              name="infos.condominiumStatus.gatedEntrance"
              content="Portaria"
            />

            <FieldController
              control={control}
              component={Checkbox}
              id="infos.condominiumStatus.security"
              name="infos.condominiumStatus.security"
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
                name="infos.condominiumStatus.commonAreas"
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
            id="infos.nearby.restaurant"
            name="infos.nearby.restaurant"
            content="Restaurante"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.school"
            name="infos.nearby.school"
            content="Escola"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.hospital"
            name="infos.nearby.hospital"
            content="Hospital / Posto de Saúde"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.supermarket"
            name="infos.nearby.supermarket"
            content="Supermercado"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.drugstore"
            name="infos.nearby.drugstore"
            content="Farmácia"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.gasStation"
            name="infos.nearby.gasStation"
            content="Posto de Gasolina"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="infos.nearby.bank"
            name="infos.nearby.bank"
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
              name="infos.nearby.publicTransportation"
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
