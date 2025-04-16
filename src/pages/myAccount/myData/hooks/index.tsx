import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { updateProfile, uploadProfileImage } from '@/services/user';

export const useUploadProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadProfileImage,
    onSuccess: () => {
      toast.success('Imagem do perfil atualizada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['user-me'], exact: true });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateProfile = () =>
  useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success('Perfil atualizado com sucesso!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
