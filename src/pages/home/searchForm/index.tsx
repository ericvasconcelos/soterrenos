import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  Button,
  Card,
  Checkbox,
  FieldController,
  Input,
  Select,
} from '@/components';
import { useStates } from '@/hooks/useStates';
import { ISearchForm } from '@/types';
import { filterMoneyMask, findAndSortCities, formatSearchURL } from '@/utils';

import { useSearchForm } from '../hooks/useSearchForm';

export const SearchForm = () => {
  const navigate = useNavigate();
  const { states, statesLoading } = useStates();

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { isValid },
  } = useSearchForm();

  const selectedState = watch('state');

  const onSubmit = useCallback(
    (formData: ISearchForm) => {
      const { state, city, ...filters } = formData;
      const url = formatSearchURL(state, city, filters);
      navigate(url);
    },
    [navigate]
  );

  useEffect(() => {
    if (!selectedState) return;
    resetField('city');
  }, [selectedState, resetField]);

  return (
    <Card className="mt-[88px] shadow-md max-w-3xl">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
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

        <div className="grid grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-2">
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
            id="financingAvailable"
            name="financingAvailable"
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
