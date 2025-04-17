import { filterOnlyNumbersMask } from '../filters';

export const formatSearchURL = (
  state: string,
  city: string,
  filters: Record<string, string | boolean>
) => {
  const basePath = `/vendas/${state}/${city}`;

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== false && value !== undefined) {
      params.append(key, value.toString());
      return;
    }

    if ((key === 'minPrice' || key === 'maxPrice') && !!value) {
      params.append(key, filterOnlyNumbersMask(value));
      return;
    }
  });

  if (params.toString()) {
    return `${basePath}?${params.toString()}`;
  }

  return basePath;
};
