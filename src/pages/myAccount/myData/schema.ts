import { InferType, mixed, number, object, ref, string } from 'yup';

import { IUserType } from '@/types';
import { validateCNPJ, validateCPF } from '@/utils';
import { errors } from '@/utils/form';

export const updateUserSchema = object().shape({
  type: string<IUserType>()
    .oneOf(['agency', 'owner', 'salesperson'])
    .required(errors.required),
  // Common fields
  newImage: mixed()
    .required('Foto de perfil é obrigatória')
    .test('file-size', 'A imagem deve ter no máximo 2MB', (value) => {
      if (!value || !Array.isArray(value)) return false;
      return value[0].size <= 2 * 1024 * 1024;
    })
    .test('file-type', 'Apenas imagens são permitidas', (value) => {
      if (!value || !Array.isArray(value)) return false;
      return ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(
        value[0].type
      );
    }),
  profileImage: object().shape({
    src: string().required(),
    width: number(),
    height: number(),
  }),
  whatsappNumber: string()
    .required(errors.required)
    .test('whatsapp-format', 'Formato inválido', (value) =>
      /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value)
    ),
  phoneNumber: string().required(errors.required),
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
  personalName: string().when('type', {
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

export type IUpdateUserForm = InferType<typeof updateUserSchema>;
