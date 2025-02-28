import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Resolver } from 'react-hook-form';
import * as yup from 'yup';
import { brazilPhone, DDDRegex } from './regex';

export interface IContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const defaultMessage = 'Preencha este campo';
const maxLengthMessage = 'Você atingiu o limite de 500 caracteres';

export const schemaSimulation = yup.object().shape({
  name: yup
    .string()
    .required(defaultMessage)
    .min(2, 'Precisamos do seu nome')
    .max(500, maxLengthMessage),
  phoneNumber: yup
    .string()
    .required(defaultMessage)
    .matches(DDDRegex, 'Código de DDD inválido')
    .matches(brazilPhone, 'Número do celular inválido'),
  email: yup
    .string()
    .required(defaultMessage)
    .email('O e-mail deve seguir o formato: exemplo@email.com')
    .max(500, 'O e-mail deve ter no máximo 500 caracteres'),
  message: yup
    .string()
    .required(defaultMessage)
    .min(10, 'Deixe uma mensagem')
    .max(500, maxLengthMessage),
});

export const useContactForm = () => {
  const resolver = yupResolver(schemaSimulation) as Resolver<IContactForm>;

  return useForm<IContactForm>({
    resolver,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  });
};
