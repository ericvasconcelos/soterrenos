import { normalizeText } from '../normalizeText';

export const formatSearchURL = (
  state: string,
  city: string,
  neighborhood: string,
  filters: Record<string, string | boolean>
) => {
  const basePath = `/vendas/${normalizeText(state)}/${normalizeText(city)}/${normalizeText(neighborhood)}`;

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== false && value !== undefined) {
      params.append(key, value.toString());
    }
  });

  if (params.toString()) {
    return `${basePath}?${params.toString()}`;
  }

  return basePath;
};
