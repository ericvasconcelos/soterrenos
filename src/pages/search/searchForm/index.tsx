import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

import {
  Button,
  Card,
  Checkbox,
  Divider,
  FieldController,
  Input,
  RadioFields,
  Select,
  Text,
} from '@/components';
import { ISearchForm, ISelectOption } from '@/types';
import {
  filterMoneyMask,
  findAndSortCities,
  findAndSortNeighborhoods,
  formatSearchURL,
  generateStates,
  sanitizePriceForSearch,
} from '@/utils';

import { advancedParams, commonAreas, paramConfigs } from './helpers';
import { useSearchForm } from './hooks/useSearchForm';

const states = generateStates();

export const SearchForm = () => {
  const navigate = useNavigate();
  const { state, city, neighborhood } = useParams();
  const [searchParams] = useSearchParams();
  const [cities, setCities] = useState<ISelectOption[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<ISelectOption[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(() =>
    advancedParams.some((param) => searchParams.has(param))
  );

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    setValue,
    formState: { isValid },
  } = useSearchForm();

  const selectedState = watch('state');
  const selectedCity = watch('city');

  useEffect(() => {
    paramConfigs.forEach(({ name, transform }) => {
      const value = searchParams.get(name);
      setValue(name, transform ? transform(value) : value || '');
    });

    const commonAreasParam = searchParams.get('commonAreas');
    if (commonAreasParam) {
      const commonAreaFields = commonAreasParam.split(
        ','
      ) as (keyof ISearchForm)[];

      commonAreaFields.forEach((name) => {
        setValue(name, true);
      });
    }

    setValue('state', state || '');
    setTimeout(() => {
      setValue('city', city || '');
      setValue('neighborhood', neighborhood || '');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = useCallback(
    (formData: ISearchForm) => {
      const { state, city, neighborhood, ...filters } = formData;

      const filteredCommonAreas = commonAreas
        .filter(({ name }) => {
          const key = name as keyof typeof filters;
          const isSelected = !!filters[key];
          delete filters[key];
          return isSelected;
        })
        .map(({ name }) => name)
        .join(',');

      const url = formatSearchURL(state, city, neighborhood, {
        ...filters,
        ...(filters.minPrice && {
          minPrice: sanitizePriceForSearch(filters.minPrice),
        }),
        ...(filters.maxPrice && {
          maxPrice: sanitizePriceForSearch(filters.maxPrice),
        }),
        commonAreas: filteredCommonAreas,
      });
      navigate(url);
    },
    [navigate]
  );

  useEffect(() => {
    if (!selectedState) return;
    resetField('city');
    const cityList = findAndSortCities(states, selectedState);
    setCities(cityList);
  }, [selectedState, resetField]);

  useEffect(() => {
    if (!selectedCity) return;
    resetField('neighborhood');
    const neighborhoodList = findAndSortNeighborhoods(
      states,
      selectedState,
      selectedCity
    );
    setNeighborhoods(neighborhoodList);
  }, [selectedCity, resetField, selectedState]);

  const handleClearFilters = useCallback(() => {
    paramConfigs.forEach(({ name, type }) => {
      setValue(name, type === 'string' ? '' : false);
    });

    commonAreas.forEach(({ name }) => {
      setValue(name, false);
    });
  }, [setValue]);

  return (
    <div>
      <Card padding="sm" hasShadow>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <FieldController
              control={control}
              component={Select}
              id="state"
              name="state"
              label="Estado"
              placeholder="Selecione um estado"
              options={states}
            />

            <FieldController
              control={control}
              component={Select}
              id="city"
              name="city"
              label="Cidade"
              placeholder="Selecione uma cidade"
              options={cities}
              disabled={!selectedState}
            />

            <FieldController
              control={control}
              component={Select}
              id="neighborhood"
              name="neighborhood"
              label="Bairro"
              placeholder="Selecione um bairro"
              options={neighborhoods}
              disabled={!selectedCity}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <FieldController
              control={control}
              component={Input}
              id="minPrice"
              name="minPrice"
              label="Preço mínimo"
              placeholder="R$ 1.000"
              filterValue={filterMoneyMask}
            />

            <FieldController
              control={control}
              component={Input}
              id="maxPrice"
              name="maxPrice"
              label="Preço máximo"
              placeholder="R$ 1.000.000"
              filterValue={filterMoneyMask}
            />

            <FieldController
              control={control}
              component={Input}
              id="minArea"
              name="minArea"
              label="Área mínima (m²)"
              type="number"
              placeholder="200"
            />

            <FieldController
              control={control}
              component={Input}
              id="maxArea"
              name="maxArea"
              label="Área máxima (m²)"
              type="number"
              placeholder="1000"
            />
          </div>

          <FieldController
            control={control}
            component={Checkbox}
            id="fgts"
            name="fgts"
            content="Pode usar FGTS"
            className="mb-1"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="financing"
            name="financing"
            content="Compra com financiamento"
            className="mb-4"
          />

          {showAdvancedFilters && (
            <div>
              <Divider space="sm" />

              <Text size="lg" weight="bold" className="mt-4 mb-2">
                Filtros avançados
              </Text>
              <Text weight="medium" className="mb-2">
                Sobre o terreno
              </Text>

              <div className="grid grid-cols-1 gap-1">
                <FieldController
                  control={control}
                  component={Checkbox}
                  id="hasWater"
                  name="hasWater"
                  content="Água encanada"
                />

                <FieldController
                  control={control}
                  component={Checkbox}
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
                  className="mb-4"
                />
              </div>

              <FieldController
                control={control}
                component={RadioFields}
                id="soilType"
                name="soilType"
                title="Tipo de solo"
                options={[
                  { value: 'clay', label: 'Argiloso' },
                  { value: 'sandy', label: 'Arenoso' },
                  { value: 'rocky', label: 'Rochoso' },
                ]}
                className="mb-4"
              />

              <FieldController
                control={control}
                component={RadioFields}
                id="slope"
                name="slope"
                title="Inclinação"
                options={[
                  { value: 'downhill', label: 'Declive' },
                  { value: 'uphill', label: 'Aclive' },
                  { value: 'flat', label: 'Plano' },
                ]}
                className="mb-4"
              />

              <FieldController
                control={control}
                component={RadioFields}
                id="zoning"
                name="zoning"
                title="Zoneamento"
                options={[
                  { value: 'residential', label: 'Residencial' },
                  { value: 'commercial', label: 'Comercial' },
                  { value: 'industrial', label: 'Industrial' },
                ]}
                className="mb-4"
              />

              <FieldController
                control={control}
                component={RadioFields}
                id="sunPosition"
                name="sunPosition"
                title="Posição solar"
                options={[
                  { value: 'east-facing', label: 'Nascente' },
                  { value: 'west-facing', label: 'Poente' },
                ]}
                className="mb-4"
              />

              <Text weight="medium" className="mb-2">
                Sobre o condomínio
              </Text>

              <div className="grid grid-cols-1 gap-1">
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
                  className="mb-2"
                />

                <div className="mb-3">
                  <Text size="sm" weight="medium" className="mb-1">
                    Áreas comuns
                  </Text>

                  {commonAreas.map(({ name, label }) => (
                    <FieldController
                      key={name}
                      control={control}
                      component={Checkbox}
                      id={name}
                      name={name}
                      content={label}
                      className="mb-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <Button isFull disabled={!isValid}>
            Buscar Terrenos
          </Button>

          <button
            onClick={handleClearFilters}
            className="block w-full mt-4 mb-2 text-sm text-center text-primary-700 cursor-pointer hover:opacity-80 transition"
          >
            Limpar filtros
          </button>

          {!showAdvancedFilters && (
            <button
              onClick={() => setShowAdvancedFilters(true)}
              className="block w-full mt-4 mb-2 text-sm text-center text-primary-700 cursor-pointer hover:opacity-80 transition"
            >
              Mostrar filtros avançados
            </button>
          )}
        </form>
      </Card>
    </div>
  );
};
