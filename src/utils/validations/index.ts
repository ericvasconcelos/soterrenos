export const validateCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf === '') return false;

  if (/^(\d)\1{10}$/.test(cpf)) return false;

  if (cpf.length !== 11) return false;

  let numbers = cpf.substring(0, 9);
  const digits = cpf.substring(9);
  let sum = 0;
  let pos = 10;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(numbers.charAt(i), 10) * pos--;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(digits.charAt(0))) return false;

  numbers = cpf.substring(0, 10);

  sum = 0;
  pos = 11;

  for (let i = 0; i < 10; i++) {
    sum += parseInt(numbers.charAt(i), 10) * pos--;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};

export const validateCNPJ = (cnpj: string) => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj === '') return false;

  if (cnpj.length !== 14) return false;

  const cnpjs = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
  ];

  if (cnpjs.includes(cnpj)) return false;

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};
