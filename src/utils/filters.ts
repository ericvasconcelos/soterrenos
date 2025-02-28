export const filterPhoneMask = (value: string) => {
  let newValue = value.replace(/\D/g, '');

  if (newValue.length > 11) {
    newValue = newValue.substring(0, 11);
  }

  newValue = newValue.replace(/^(\d{2})(\d)/g, '($1) $2');
  if (newValue.length <= 10) {
    newValue = newValue.replace(/(\d)(\d{4})$/, '$1-$2');
  } else {
    newValue = newValue.replace(/(\d)(\d{4})$/, '$1-$2');
  }

  return newValue;
};

export const filterNameMask = (value: string) => {
  let newValue = value.replace(/\d/g, '');
  newValue = newValue.replace(/\s{2,}/g, '  ');
  return newValue;
};
