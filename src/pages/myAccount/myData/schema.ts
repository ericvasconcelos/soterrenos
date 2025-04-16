import { InferType, number, object, string } from 'yup';

import { IUserType } from '@/types';
import { validateCNPJ, validateCPF } from '@/utils';
import { errors } from '@/utils/form';

export const updateUserSchema = object().shape({
  id: string().required(errors.required),
  type: string<IUserType>()
    .oneOf(['agency', 'owner', 'salesperson'])
    .required(errors.required),
  // Common fields
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

export type IUpdateUserForm = InferType<typeof updateUserSchema>;
