import { ISelectOption } from '../../types';

export const formatAndSort = (items: ISelectOption[]): ISelectOption[] =>
  items
    .map(({ value, label }) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label));
