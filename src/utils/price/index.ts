export const priceFormatter = (price?: number, digits: number = 2): string => {
  const value = price?.toLocaleString('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  const concact = `R$ ${value}`;
  return concact;
};

export const sanitizePrice = (price: string): number => {
  const cleanPrefix = price?.replace(/[R$ ]/g, '');
  const cleanedValue = cleanPrefix.replace(/[,.]/g, '');
  const numericValue = parseFloat(cleanedValue) / 100;
  return numericValue;
};
