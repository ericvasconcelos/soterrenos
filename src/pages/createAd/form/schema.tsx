import { array, boolean, InferType, number, object, string } from 'yup';

import { IImage } from '@/types';
import { errors, sanitizePrice } from '@/utils';

export const createAdSchema = object().shape({
  title: string()
    .min(20, errors.min(20))
    .max(300, errors.max(300))
    .required(errors.required),
  active: boolean().required(),
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
    .optional(),
  // .min(5, 'Adicione no mínimo 5 imagens')
  // .min(10, 'Adicione até 10 imagens')
  // .required(errors.required),
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
    .max(19, errors.max(19))
    .when('address.condominium', {
      is: (val: string) => !!val,
      then: (schema) =>
        schema.test({
          name: 'testNumber',
          message: 'Coloque um valor correto',
          test: function (value) {
            const sanitizedPrice = sanitizePrice(value || '');
            return typeof sanitizedPrice === 'number' || isNaN(sanitizedPrice);
          },
        }),
    })
    .optional(),
  propertyTax: string()
    .max(19, errors.max(19))
    .test({
      name: 'testNumber',
      message: 'Coloque um valor correto',
      test: function (value) {
        const sanitizedPrice = sanitizePrice(value || '');
        return typeof sanitizedPrice === 'number' || isNaN(sanitizedPrice);
      },
    })
    .optional(),
  financingAvailable: boolean(),
  fgts: boolean(),
  description: string().required(errors.required),

  // whatHas
  hasWater: boolean(),
  hasArtesianWell: boolean(),
  hasSewageSystem: boolean(),
  hasEletricity: boolean(),
  hasGas: boolean(),
  hasInternet: boolean(),
  isFenced: boolean(),
  isLandLeveled: boolean(),
  isLotClear: boolean(),
  soil: string().oneOf(['clay', 'sandy', 'rocky']).required(),
  slope: string().oneOf(['flat', 'downhill', 'uphill']).required(),
  zoning: string()
    .oneOf(['residential', 'commercial', 'industrial'])
    .required(),
  sunPosition: string().oneOf(['east-facing', 'west-facing']).required(),

  // condominiumStatus
  established: boolean(),
  paved: boolean(),
  streetLighting: boolean(),
  sanitationBasic: boolean(),
  sidewalks: boolean(),
  gatedEntrance: boolean(),
  security: boolean(),
  commonAreas: array().of(string()),

  // nearby
  restaurant: boolean(),
  school: boolean(),
  hospital: boolean(),
  supermarket: boolean(),
  drugstore: boolean(),
  gasStation: boolean(),
  bank: boolean(),
  publicTransportation: array().of(string()),
});

export type ICreateFormData = InferType<typeof createAdSchema>;

export interface ICreateLandPayload
  extends Omit<
    ICreateFormData,
    'price' | 'condominiumTax' | 'propertyTax' | 'images'
  > {
  price: number;
  condominiumTax?: number;
  propertyTax?: number;
  images: IImage[];
}
