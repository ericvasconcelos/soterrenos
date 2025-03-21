import { ISearchForm } from '@/types';

export type SearchParamConfig = {
  name: keyof ISearchForm;
  transform?: (value: string | null) => string | boolean;
};
