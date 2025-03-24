import { IAgency, IBasePartner, ISalesperson } from '@/types';

export const isSalesperson = (item: IBasePartner): item is ISalesperson =>
  'firstName' in item;

export const isAgency = (item: IBasePartner): item is IAgency =>
  'tradeName' in item;
