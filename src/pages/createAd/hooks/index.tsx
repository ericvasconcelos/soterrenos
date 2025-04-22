import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { createLand, updateLand } from '@/services/lands';

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

export const useUpdateLand = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateLand,
    onSuccess: async ({ id }) => {
      await queryClient.invalidateQueries({
        queryKey: ['landsByUSer', id, 1, 8, true],
      });
      await queryClient.invalidateQueries({
        queryKey: ['fetchLand', id],
        exact: true,
      });

      toast.success('Terreno atualizado com sucesso!');
      navigate('/meus-anuncios/ativos');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Erro ao atualizar terreno');
    },
  });
};
