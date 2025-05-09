import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { signUpUser } from '@/services/user';

export const useSignUp = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success('Cadastro realizado com sucesso!');
      navigate('/entrar');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Erro ao realizar cadastro');
    },
  });
};
