import { useQuery } from '@tanstack/react-query';

import { fetchZipCode } from '../../services/zipCode';
import { IZipCodeData } from '../../services/zipCode/types';

export const useZipCode = (zipCode: string) =>
  useQuery<IZipCodeData, Error>({
    queryKey: ['zipCode', zipCode], // Chave única para a query
    queryFn: () => fetchZipCode(zipCode), // Função que faz a requisição
    enabled: !!zipCode && zipCode.length === 8, // Só faz a requisição se o CEP for válido
    staleTime: 1000 * 60 * 5, // Dados ficam "frescos" por 5 minutos
  });
