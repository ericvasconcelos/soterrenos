import { array, boolean, InferType, number, object, string } from 'yup';

import { errors, sanitizePrice } from '@/utils';

export const createAdSchema = object().shape({
  title: string().required(errors.required),
  active: boolean().required(),
  images: array()
    .of(
      object().shape({
        id: string().required(),
        src: string().required(),
        type: string().required(),
        size: number().required(),
        featured: boolean(),
      })
    )
    .min(5, 'Adicione no mínimo 5 imagens')
    .min(10, 'Adicione até 10 imagens')
    .required(errors.required),
  address: object().shape({
    zipCode: string().required(errors.required),
    street: string().required(errors.required),
    number: string().required(errors.required),
    complement: string(),
    neighborhood: string().required(errors.required),
    city: string().required(errors.required),
    state: string().required(errors.required),
    condominium: string(),
  }),
  landSize: object().shape({
    front: number()
      .positive('Tamanho tem que ser maior que zero')
      .required(errors.required),
    left: number()
      .positive('Tamanho tem que ser maior que zero')
      .required(errors.required),
    right: number()
      .positive('Tamanho tem que ser maior que zero')
      .required(errors.required),
    back: number()
      .positive('Tamanho tem que ser maior que zero')
      .required(errors.required),
  }),
  price: string()
    .test({
      name: 'testNumber',
      message: 'Coloque um valor correto',
      test: function (value) {
        const sanitizedPrice = sanitizePrice(value || '');
        return typeof sanitizedPrice === 'number';
      },
    })
    .required(errors.required),
  condominiumTax: string().when('address.condominium', {
    is: (val: string) => !!val,
    then: (schema) =>
      schema
        .test({
          name: 'testNumber',
          message: 'Coloque um valor correto',
          test: function (value) {
            const sanitizedPrice = sanitizePrice(value || '');
            return typeof sanitizedPrice === 'number';
          },
        })
        .required(errors.required),
  }),
  propertyTax: string()
    .optional()
    .test({
      name: 'testNumber',
      message: 'Coloque um valor correto',
      test: function (value) {
        const sanitizedPrice = sanitizePrice(value || '');
        return typeof sanitizedPrice === 'number';
      },
    }),
  financingAvailable: boolean(),
  fgts: boolean(),
  description: string().required(errors.required),
  infos: object().shape({
    whatHas: object().shape({
      hasWater: boolean(),
      hasArtesianWell: boolean(),
      hasSewageSystem: boolean(),
      hasEletricity: boolean(),
      hasGas: boolean(),
      hasInternet: boolean(),
      isFenced: boolean(),
      isLandLeveled: boolean(),
      isLotClear: boolean(),
      soilType: string().required(),
      slope: string().required(),
      zoning: string().required(),
      sunPosition: string().required(),
    }),
    condominiumStatus: object().shape({
      established: boolean(),
      paved: boolean(),
      streetLighting: boolean(),
      sanitationBasic: boolean(),
      sidewalks: boolean(),
      gatedEntrance: boolean(),
      security: boolean(),
      commonAreas: array().of(string()),
    }),
    nearby: object().shape({
      restaurant: boolean(),
      school: boolean(),
      hospital: boolean(),
      supermarket: boolean(),
      drugstore: boolean(),
      gasStation: boolean(),
      bank: boolean(),
      publicTransportation: array().of(string()),
    }),
  }),
});

export type ICreateFormData = InferType<typeof createAdSchema>;
