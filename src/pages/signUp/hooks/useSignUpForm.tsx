import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';

import { ISignUpForm, IUserType } from '@/types';
import { validateCNPJ, validateCPF } from '@/utils';
import { errors } from '@/utils/form';

const schemaSignUp = object().shape({
  type: string<IUserType>()
    .oneOf(['agency', 'owner', 'salesperson'])
    .required(errors.required),
  // Common fields
  phoneNumber: string().required(errors.required),
  whatsappNumber: string().required(errors.required),
  email: string()
    .required(errors.required)
    .email('O e-mail deve seguir o formato: exemplo@email.com')
    .max(400, errors.max(400)),
  password: string()
    .required(errors.required)
    .min(8, errors.password.min)
    .max(40, errors.password.max)
    .matches(/[A-Z]/, errors.password.uppercase)
    .matches(/[0-9]/, errors.password.number)
    .matches(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      errors.password.specialChar
    ),
  confirmPassword: string()
    .oneOf([ref('password')], errors.password.equal)
    .required(errors.required),
  // Fields for "owner" and "salesperson"
  personalFirstName: string().when('type', {
    is: (val: string) => ['owner', 'salesperson'].includes(val),
    then: (schema) =>
      schema
        .required(errors.required)
        .min(2, errors.min(2))
        .max(50, errors.max(50)),
    otherwise: (schema) => schema.notRequired(),
  }),
  personalLastName: string().when('type', {
    is: (val: string) => ['owner', 'salesperson'].includes(val),
    then: (schema) =>
      schema
        .required(errors.required)
        .min(2, errors.min(2))
        .max(200, errors.max(200)),
    otherwise: (schema) => schema.notRequired(),
  }),
  personalId: string().when('type', {
    is: (val: string) => ['owner', 'salesperson'].includes(val),
    then: (schema) =>
      schema.required(errors.required).test('validateCPF', (value, ctx) => {
        if (!validateCPF(value)) {
          return ctx.createError({ message: 'CPF inválido' });
        }
        return true;
      }),
    otherwise: (schema) => schema.notRequired(),
  }),
  // Fields for "agency"
  legalName: string().when('type', {
    is: (val: string) => val === 'agency',
    then: (schema) =>
      schema
        .required(errors.required)
        .min(2, errors.min(2))
        .max(500, errors.max(500)),
    otherwise: (schema) => schema.notRequired(),
  }),
  tradeName: string().when('type', {
    is: (val: string) => val === 'agency',
    then: (schema) =>
      schema
        .required(errors.required)
        .min(2, errors.min(2))
        .max(500, errors.max(500)),
    otherwise: (schema) => schema.notRequired(),
  }),
  companyId: string().when('type', {
    is: (val: string) => val === 'agency',
    then: (schema) =>
      schema.required(errors.required).test('validateCNPJ', (value, ctx) => {
        if (!validateCNPJ(value)) {
          return ctx.createError({ message: 'CNPJ inválido' });
        }
        return true;
      }),
    otherwise: (schema) => schema.notRequired(),
  }),
  // Fields for "salesperson"
  creci: string().when('type', {
    is: (val: string) => val === 'salesperson',
    then: (schema) => schema.required(errors.required),
    otherwise: (schema) => schema.notRequired(),
  }),
  creciState: string().when('type', {
    is: (val: string) => val === 'salesperson',
    then: (schema) => schema.required(errors.required),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export const useSignUpForm = () =>
  useForm<ISignUpForm>({
    resolver: yupResolver(schemaSignUp) as Resolver<ISignUpForm>,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      type: 'owner',
      personalFirstName: '',
      personalLastName: '',
      personalId: '',
      legalName: '',
      tradeName: '',
      companyId: '',
      creci: '',
      creciState: '',
      password: '',
      confirmPassword: '',
      email: '',
      phoneNumber: '',
      whatsappNumber: '',
    },
  });
