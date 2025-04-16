import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';

import { IUpdateUserForm, updateUserSchema } from './schema';

export const useUpdateUserForm = () =>
  useForm<IUpdateUserForm>({
    resolver: yupResolver(updateUserSchema) as Resolver<IUpdateUserForm>,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      personalFirstName: '',
      personalLastName: '',
      personalId: '',
      legalName: '',
      tradeName: '',
      companyId: '',
      creci: '',
      creciState: '',
      email: '',
      phoneNumber: '',
      whatsappNumber: '',
    },
  });
