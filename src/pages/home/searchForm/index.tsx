import { useEffect, useState } from 'react';

import {
  Button,
  Card,
  Checkbox,
  FieldController,
  Input,
  Select,
} from '@/components';
import { ISelectOption } from '@/types';

import { ISearchForm, useSearchForm } from './hooks/useSearchForm';
import {
  findAndSortCities,
  findAndSortNeighborhoods,
  generateStates,
} from './utils';

const states = generateStates();

export const SearchForm = () => {
  const [cities, setCities] = useState<ISelectOption[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<ISelectOption[]>([]);

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { isValid },
  } = useSearchForm();

  const selectedState = watch('state');
  const selectedCity = watch('city');

  const onSubmit = (formData: ISearchForm) => {
    console.log('Buscando terrenos com os filtros:', formData);
  };

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

  return (
    <Card className="mt-[88px] shadow-md max-w-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
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
            disabled={!watch('city')}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-2">
            <FieldController
              control={control}
              component={Input}
              id="minPrice"
              name="minPrice"
              label="Preço mínimo"
              type="number"
              placeholder="R$ 100.000"
            />

            <FieldController
              control={control}
              component={Input}
              id="maxPrice"
              name="maxPrice"
              label="Preço máximo"
              type="number"
              placeholder="R$ 1.000.000"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div className="flex items-center gap-8 mt-2">
          <FieldController
            control={control}
            component={Checkbox}
            id="fgts"
            name="fgts"
            content="Pode usar FGTS"
          />

          <FieldController
            control={control}
            component={Checkbox}
            id="financing"
            name="financing"
            content="Compra com financiamento"
          />

          <Button disabled={!isValid} className="ml-auto">
            Buscar Terrenos
          </Button>
        </div>
      </form>
    </Card>
  );
};
