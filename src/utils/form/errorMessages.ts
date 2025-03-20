export const errors = {
  required: 'Este campo é obrigatório',
  min: (number: number) =>
    `Este campo deve ter no mínimo de ${number} caracteres`,
  max: (number: number) => `Você atingiu o limite de ${number} caracteres`,
  password: {
    min: 'A senha deve ter no mínimo 8 caracteres',
    max: 'A senha deve ter no máximo 40 caracteres',
    uppercase: 'Deve conter pelo menos 1 letra maiúscula',
    number: 'Deve conter pelo menos 1 número',
    specialChar: 'Deve conter pelo menos 1 caractere especial',
    equal: 'As senhas devem ser iguais',
  },
};
