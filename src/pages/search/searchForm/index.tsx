import cx from 'classnames';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';

import {
  Button,
  Checkbox,
  Divider,
  FieldController,
  Icon,
  Input,
  RadioFields,
  Select,
  Text,
} from '@/components';
import { useStates } from '@/hooks/useStates';
import { ISearchForm } from '@/types';
import { filterMoneyMask, findAndSortCities, formatSearchURL } from '@/utils';

import { advancedParams, commonAreas, paramConfigs } from '../helpers';
import { useSearchForm } from '../hooks/useSearchForm';

export const SearchForm = () => {
  const navigate = useNavigate();
  const { state, city } = useParams();
  const [searchParams] = useSearchParams();
  const [openFilters, setOpenFilters] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(() =>
    advancedParams.some((param) => searchParams.has(param))
  );
  const { states, statesLoading } = useStates();

  const numberOfFiltersApplied: number = useMemo(() => {
    const paramCount = Object.keys(Object.fromEntries(searchParams)).length;
    return paramCount;
  }, [searchParams]);

  const defaultValues = useMemo(() => {
    const defaultValues: Record<string, unknown> = {};

    paramConfigs.forEach(({ name, transform }) => {
      const value = searchParams.get(name);
      defaultValues[name] = transform ? transform(value) : value || '';
    });

    const commonAreasParam = searchParams.get('commonAreas');
    if (commonAreasParam) {
      const commonAreaFields = commonAreasParam.split(',');
      commonAreaFields.forEach((name) => {
        defaultValues[name] = true;
      });
    }

    defaultValues['state'] = state || '';
    defaultValues['city'] = city || '';

    return defaultValues;
  }, [city, searchParams, state]);

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    setValue,
    formState: { isValid },
  } = useSearchForm(defaultValues);

  const selectedState = watch('state');

  const onSubmit = useCallback(
    (formData: ISearchForm) => {
      const { state, city, ...filters } = formData;

      const filteredCommonAreas = commonAreas
        ?.filter(({ name }) => {
          const key = name as keyof typeof filters;
          const isSelected = !!filters[key];
          delete filters[key];
          return isSelected;
        })
        ?.map(({ name }) => name)
        .join(',');

      const url = formatSearchURL(state, city, {
        ...filters,
        commonAreas: filteredCommonAreas,
      });
      navigate(url);
      setOpenFilters(false);
    },
    [navigate]
  );

  useEffect(() => {
    if (!selectedState) return;
    resetField('city');
  }, [selectedState, resetField]);

  const handleClearFilters = useCallback(() => {
    paramConfigs?.forEach(({ name, type }) => {
      setValue(name, type === 'string' ? '' : false);
    });

    commonAreas?.forEach(({ name }) => {
      setValue(name, false);
    });
  }, [setValue]);

  return (
    <>
      <Button
        onClick={() => setOpenFilters(true)}
        variant="secondary"
        className="md:hidden mb-4"
      >
        Mostrar Filtros ({numberOfFiltersApplied})
      </Button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cx(
          'bg-gray-50 fixed z-10 top-0 left-0 bottom-0 max-w-[360px] max-h-full md:sticky md:top-4 md:mt-[-16px] md:max-h-[calc(100vh-32px)] overflow-hidden',
          {
            'hidden md:block': !openFilters,
          }
        )}
      >
        <div className="flex md:hidden justify-between px-4 py-3 border-b-1 border-gray-300">
          <Text size="lg" weight="medium">
            Filtros
          </Text>

          <button
            onClick={() => setOpenFilters(false)}
            className="block md:hidden cursor-pointer"
            aria-label="Fechar filtro"
          >
            <Icon name="x-mark" size={26} color="dark" />
          </button>
        </div>
        <div className="max-h-[calc(100%-181px)] md:max-h-[calc(100%-129px)] p-4 scroll overflow-auto">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <FieldController
              control={control}
              component={Select}
              id="state"
              name="state"
              label="Estado"
              placeholder="Selecione um estado"
              options={states}
              disabled={statesLoading}
            />

            <FieldController
              control={control}
              component={Select}
              id="city"
              name="city"
              label="Cidade"
              placeholder="Selecione uma cidade"
              options={findAndSortCities(states, selectedState)}
              disabled={!selectedState || statesLoading}
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
            id="financingAvailable"
            name="financingAvailable"
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
                name="soil"
                title="Tipo de solo"
                options={[
                  { value: 'clay', label: 'Argiloso' },
                  { value: 'sandy', label: 'Arenoso' },
                  { value: 'rocky', label: 'Rochoso' },
                ]}
                className="mb-2"
              />

              <FieldController
                control={control}
                component={RadioFields}
                name="slope"
                title="Inclinação"
                options={[
                  { value: 'downhill', label: 'Declive' },
                  { value: 'uphill', label: 'Aclive' },
                  { value: 'flat', label: 'Plano' },
                ]}
                className="mb-2"
              />

              <FieldController
                control={control}
                component={RadioFields}
                name="zoning"
                title="Zoneamento"
                options={[
                  { value: 'residential', label: 'Residencial' },
                  { value: 'commercial', label: 'Comercial' },
                  { value: 'industrial', label: 'Industrial' },
                ]}
                className="mb-2"
              />

              <FieldController
                control={control}
                component={RadioFields}
                name="sunPosition"
                title="Posição solar"
                options={[
                  { value: 'east-facing', label: 'Nascente' },
                  { value: 'west-facing', label: 'Poente' },
                ]}
                className="mb-2"
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

                <div>
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
        </div>

        <div className="p-4 border-t-1 border-gray-300">
          <Button type="submit" isFull disabled={!isValid} className="mb-2">
            Buscar Terrenos
          </Button>

          <button
            type="button"
            onClick={handleClearFilters}
            className="block w-full mb-2 text-sm text-center text-primary-700 cursor-pointer hover:opacity-80 transition"
          >
            Limpar filtros
          </button>

          {showAdvancedFilters ? (
            <button
              type="button"
              onClick={() => setShowAdvancedFilters(false)}
              className="block w-full text-sm text-center text-primary-700 cursor-pointer hover:opacity-80 transition"
            >
              Esconder filtros avançados
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowAdvancedFilters(true)}
              className="block w-full text-sm text-center text-primary-700 cursor-pointer hover:opacity-80 transition"
            >
              Mostrar filtros avançados
            </button>
          )}
        </div>
      </form>
    </>
  );
};
