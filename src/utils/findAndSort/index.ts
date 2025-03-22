import { ISelectOption } from '../../types';
import { formatAndSort } from '../formatAndSort';
import { IState } from '../generateStates/types';

export const findAndSortCities = (
  states: IState[],
  selectedState: string
): ISelectOption[] => {
  const data =
    states.find(({ value }) => value === selectedState)?.cities ?? [];
  const cityList = formatAndSort(data);
  return cityList;
};

export const findAndSortNeighborhoods = (
  states: IState[],
  selectedState: string,
  selectedCity: string
): ISelectOption[] => {
  const data =
    states.find(({ value }) => value === selectedState)?.cities ?? [];
  const list =
    data.find(({ value }) => value === selectedCity)?.neighborhoods ?? [];
  const neighborhoodList = formatAndSort(list);
  return neighborhoodList;
};
