import { string } from 'yup';

import { sanitizePrice } from '@/utils';

export const searchBaseSchema = {
  state: string().required('Selecione um estado'),
  city: string().required('Selecione uma cidade'),
  minPrice: string()
    .optional()
    .test({
      name: 'minPriceLessThanMax',
      message: 'O preço mínimo deve ser menor que o máximo',
      test: function (value) {
        const min = sanitizePrice(value || '');
        const max = sanitizePrice(this.parent.maxPrice || '');
        if (!value || !this.parent.maxPrice) return true;
        return min < max;
      },
    }),
  maxPrice: string()
    .optional()
    .test({
      name: 'maxPriceGreaterThanMin',
      message: 'O preço máximo deve ser maior que o mínimo',
      test: function (value) {
        const min = sanitizePrice(this.parent.minPrice || '');
        const max = sanitizePrice(value || '');
        if (!this.parent.minPrice || !value) return true;
        return max > min;
      },
    }),
  minArea: string()
    .optional()
    .test({
      name: 'minAreaLessThanMax',
      message: 'A área mínima deve ser menor que a máxima',
      test: function (value) {
        const min = parseFloat(value || '');
        const max = parseFloat(this.parent.maxArea || '');
        if (!value || !this.parent.maxArea) return true;
        return min < max;
      },
    }),
  maxArea: string()
    .optional()
    .test({
      name: 'maxAreaGreaterThanMin',
      message: 'A área máxima deve ser maior que a mínima',
      test: function (value) {
        const min = parseFloat(this.parent.minArea || '');
        const max = parseFloat(value || '');
        if (!this.parent.minArea || !value) return true;
        return max > min;
      },
    }),
};
