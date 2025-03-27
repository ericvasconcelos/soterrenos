import { array, boolean, InferType, number, object, string } from 'yup';

import { errors, sanitizePrice } from '@/utils';

export const createAdSchema = object().shape({
  title: string()
    .min(30, errors.min(30))
    .max(300, errors.max(300))
    .required(errors.required),
  active: boolean().required(),
  videoUrl: string().matches(
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})(\S*)?$/,
    'Adicione uma URL válida do YouTube'
  ),
  images: array()
    .of(
      object().shape({
        id: string().required(),
        src: string().required(),
        type: string().required(),
        size: number().required(),
        fileName: string(),
        featured: boolean(),
        uploadStatus: string().oneOf(['completed', 'uploading', 'failed']),
      })
    )
    .test(
      'all-uploads-completed',
      'Todos os uploads devem estar completos',
      (images) =>
        !images || images.every((img) => img.uploadStatus === 'completed')
    )
    .min(5, 'Adicione no mínimo 5 imagens')
    .min(10, 'Adicione até 10 imagens')
    .required(errors.required),
  address: object()
    .shape({
      zipCode: string().required(errors.required),
      street: string().required(errors.required),
      number: string().required(errors.required),
      complement: string(),
      neighborhood: string().required(errors.required),
      city: string().required(errors.required),
      state: string().required(errors.required),
      condominium: string(),
    })
    .required(errors.required),
  landSize: object()
    .shape({
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
    })
    .required(errors.required),
  price: string()
    .min(8, 'Coloque um valor correto')
    .max(19, errors.max(19))
    .test({
      name: 'testNumber',
      message: 'Coloque um valor correto',
      test: function (value) {
        const sanitizedPrice = sanitizePrice(value || '');
        return typeof sanitizedPrice === 'number';
      },
    })
    .required(errors.required),
  condominiumTax: string()
    .min(8, 'Coloque um valor correto')
    .max(19, errors.max(19))
    .when('address.condominium', {
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
    .min(8, 'Coloque um valor correto')
    .max(19, errors.max(19))
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
  seller: object().shape({
    reuseUserInfos: boolean(),
    phoneNumber: string().when('seller.reuseUserInfos', {
      is: false,
      then: (schema) =>
        schema
          .min(14, errors.min(14))
          .max(15, errors.min(15))
          .required(errors.required),
    }),
    whatsappNumber: string().when('seller.reuseUserInfos', {
      is: false,
      then: (schema) =>
        schema
          .min(14, errors.min(14))
          .max(15, errors.min(15))
          .required(errors.required),
    }),
    email: string().when('seller.reuseUserInfos', {
      is: false,
      then: (schema) => schema.email().required(errors.required),
    }),
    creci: string().when('seller.reuseUserInfos', {
      is: false,
      then: (schema) =>
        schema
          .min(4, errors.min(4))
          .max(15, errors.min(15))
          .required(errors.required),
    }),
    creciState: string().when('seller.reuseUserInfos', {
      is: false,
      then: (schema) => schema.required(errors.required),
    }),
  }),
});

export type ICreateFormData = InferType<typeof createAdSchema>;
