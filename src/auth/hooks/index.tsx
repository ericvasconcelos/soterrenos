import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { login } from '@/services/auth';

export const useLogin = () =>
  useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('Login realizado com sucesso!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Erro ao fazer o login');
    },
  });
