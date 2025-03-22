import { ISearchForm } from '@/types';

export type SearchParamConfig = {
  name: keyof ISearchForm;
  transform?: (value: string | null) => string | boolean;
};

export interface ICommonArea {
  name: keyof Omit<ISearchForm, 'state' | 'city' | 'neighborhood'>;
  label: string;
}
