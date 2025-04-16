import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { createLand } from '@/services/lands';

export const useCreateLand = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createLand,
    onSuccess: () => {
      toast.success('Terreno cadastrado com sucesso!');
      navigate('/meus-anuncios/ativos');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Erro ao realizar cadastro do terreno');
    },
  });
};
