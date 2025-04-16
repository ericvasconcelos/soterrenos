import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';

import { createAdSchema, ICreateFormData } from './schema';

export const useCreateForm = () =>
  useForm<ICreateFormData>({
    resolver: yupResolver(createAdSchema) as Resolver<ICreateFormData>,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      active: true,
      images: [],
      address: {
        zipCode: '',
        street: '',
        neighborhood: '',
        city: '',
        state: '',
        condominium: '',
      },
      price: '',
      propertyTax: '',
      condominiumTax: '',
      landSize: {
        front: 0,
        left: 0,
        right: 0,
        back: 0,
      },

      hasWater: false,
      hasArtesianWell: false,
      hasSewageSystem: false,
      hasEletricity: false,
      hasGas: false,
      hasInternet: false,
      isFenced: false,
      isLandLeveled: false,
      isLotClear: false,
      soil: 'clay',
      slope: 'flat',
      zoning: 'residential',
      sunPosition: 'east-facing',

      established: false,
      paved: false,
      streetLighting: false,
      sanitationBasic: false,
      sidewalks: false,
      gatedEntrance: false,
      security: false,
      commonAreas: [],

      publicTransportation: [],
      restaurant: false,
      school: false,
      hospital: false,
      supermarket: false,
      drugstore: false,
      gasStation: false,
      bank: false,
    },
  });
