import { ISearchForm } from '@/types';

export type SearchParamConfig = {
  name: keyof ISearchForm;
  type: 'string' | 'boolean';
  transform?: (value: string | null) => string | boolean;
};

export interface ICommonArea {
  name: keyof Omit<ISearchForm, 'state' | 'city' | 'neighborhood'>;
  label: string;
}
