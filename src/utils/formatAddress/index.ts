import { IAddress } from '../../types';

export const formatAddress = ({
  street,
  condominium,
  neighborhood,
  city,
  state,
  zipCode,
}: IAddress): string =>
  `${street}${condominium ? ', ' + condominium : ''}, ${neighborhood}, ${city}, ${state} - CEP: ${zipCode}`;
