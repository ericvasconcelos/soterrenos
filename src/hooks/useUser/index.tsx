import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/services/user';
import { IUser, IUserType } from '@/types';

export const useUser = (type: IUserType) =>
  useQuery<IUser, Error>({
    queryKey: ['user', type], // Chave única para a query
    queryFn: () => getUser(type), // Função que faz a requisição
    enabled: !!type, // Só faz a requisição se o CEP for válido
    staleTime: 1000 * 60 * 5, // Dados ficam "frescos" por 5 minutos
  });
