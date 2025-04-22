import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import { errors } from '@/utils/form';

import { ILogin } from './types';

const schemaLogin = object().shape({
  email: string()
    .required(errors.required)
    .email('O e-mail deve seguir o formato: exemplo@email.com')
    .max(400, errors.max(400)),
  password: string().required(errors.required).max(400, errors.max(400)),
});

export const useLoginForm = () =>
  useForm<ILogin>({
    resolver: yupResolver(schemaLogin) as Resolver<ILogin>,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
