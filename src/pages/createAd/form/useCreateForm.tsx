import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';

import { createAdSchema, ICreateFormData } from './schema';

export const useCreateForm = () =>
  useForm<ICreateFormData>({
    resolver: yupResolver(createAdSchema) as Resolver<ICreateFormData>,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
