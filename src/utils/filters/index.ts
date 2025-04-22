import { priceFormatter, sanitizePrice } from '../price';

export const filterPhoneMask = (value: string) => {
  const newValue = value.replace(/\D/g, '').substring(0, 11);

  if (newValue.length <= 2) return newValue;

  const areaCode = newValue.substring(0, 2);
  const mainPart = newValue.substring(2);
  const isMobile = newValue.length === 11;

  let formatted = `(${areaCode})`;

  if (mainPart.length > 0) {
    formatted += ` ${mainPart.substring(0, isMobile ? 5 : 4)}`;

    if (mainPart.length > (isMobile ? 5 : 4)) {
      formatted += `-${mainPart.substring(isMobile ? 5 : 4)}`;
    }
  }

  return formatted;
};

export const filterSimpleNameMask = (value: string) => {
  const newValue = value.replace(/\d/g, '');
  return newValue;
};

export const filterFullNameMask = (value: string) => {
  let newValue = value.replace(/\d/g, '');
  newValue = newValue.replace(/\s{2,}/g, ' ');
  return newValue;
};

export const filterCompanyNameMask = (value: string) => {
  const newValue = value.replace(/\s{2,}/g, ' ');
  return newValue;
};

export const filterCPFMask = (value: string) => {
  const newValue = value.replace(/\D/g, '').substring(0, 11);

  return newValue
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const filterCNPJMask = (value: string) => {
  const newValue = value.replace(/\D/g, '').substring(0, 14);

  return newValue
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const filterOnlyNumbersMask = (value: string) => {
  const newValue = value.replace(/\D/g, '');
  return newValue;
};

export const filterMoneyMask = (value: string) => {
  const sanitizedPrice = sanitizePrice(value);
  if (!isNaN(sanitizedPrice)) return priceFormatter(sanitizedPrice);
  return '';
};

export const filterZipCode = (value: string) => {
  const newValue = value.replace(/\D/g, '').substring(0, 9);

  return newValue.replace(/(\d{5})(\d{3})/, '$1-$2');
};
