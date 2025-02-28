export const priceFormatter = (price: number) => {
  const str1 = price?.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const str2 = 'R$';
  const concact = `${str2} ${str1}`;
  return concact;
};
