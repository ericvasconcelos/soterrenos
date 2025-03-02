import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface ISearchForm {
  state: string;
  city: string;
  neighborhood: string;
  minPrice: string;
  maxPrice: string;
  minArea: string;
  maxArea: string;
  fgts: boolean;
  financing: boolean;
}

const validationSchema = yup.object().shape({
  state: yup.string().required('Selecione um estado'),
  city: yup.string().required('Selecione uma cidade'),
  neighborhood: yup.string().required('Selecione um bairro'),
  minPrice: yup.string().optional(),
  maxPrice: yup.string().optional(),
  minArea: yup.string().optional(),
  maxArea: yup.string().optional(),
  fgts: yup.boolean().optional(),
  financing: yup.boolean().optional(),
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
