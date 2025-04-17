import { ISelectOption } from '@/types';

import { formatAndSort } from '../formatAndSort';
import { IState } from '../generateStateOptions/types';

export const findAndSortCities = (
  states: IState[],
  selectedState: string
): ISelectOption[] => {
  const data =
    states.find(({ value }) => value === selectedState)?.cities ?? [];
  const cityList = formatAndSort(data);
  return cityList;
};
