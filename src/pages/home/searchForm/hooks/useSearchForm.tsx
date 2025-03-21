import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { searchBaseSchema } from '@/schemas';
import { ISearchForm } from '@/types';

const validationSchema = yup.object().shape({
  ...searchBaseSchema,
});

export const useSearchForm = () => {
  const resolver = yupResolver(validationSchema) as Resolver<ISearchForm>;

  return useForm<ISearchForm>({
    resolver,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      state: '',
      city: '',
      neighborhood: '',
      minPrice: '',
      maxPrice: '',
      minArea: '',
      maxArea: '',
      fgts: false,
      financing: false,
    },
  });
};
