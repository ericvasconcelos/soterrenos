import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, useForm } from 'react-hook-form';
import { boolean, object, string } from 'yup';

import { searchBaseSchema } from '@/schemas';
import { ISearchForm } from '@/types';

const validationSchema = object().shape({
  ...searchBaseSchema,
  fgts: boolean().optional(),
  financing: boolean().optional(),
  hasWater: boolean().optional(),
  hasArtesianWell: boolean().optional(),
  hasSewageSystem: boolean().optional(),
  hasEletricity: boolean().optional(),
  isFenced: boolean().optional(),
  isLandLeveled: boolean().optional(),
  isLotClear: boolean().optional(),
  soilType: string().optional(),
  slope: string().optional(),
  zoning: string().optional(),
  sunPosition: string().optional(),
});

export const useSearchForm = () => {
  const resolver = yupResolver(validationSchema) as Resolver<ISearchForm>;

  return useForm<ISearchForm>({
    resolver,
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      state: '',
      city: '',
      neighborhood: '',
      minPrice: '',
      maxPrice: '',
      minArea: '',
      maxArea: '',
      fgts: false,
      financing: false,
      hasWater: false,
      hasArtesianWell: false,
      hasSewageSystem: false,
      hasEletricity: false,
      isFenced: false,
      isLandLeveled: false,
      isLotClear: false,
      soilType: '',
      slope: '',
      zoning: '',
      sunPosition: '',
    },
  });
};
