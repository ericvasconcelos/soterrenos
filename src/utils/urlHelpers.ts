export const formatSearchURL = (
  state: string,
  city: string,
  neighborhood: string,
  filters: Record<string, string | boolean>
) => {
  const basePath = `/vendas/${state.toLowerCase()}/${city.toLowerCase().replace(/ /g, '-')}/${neighborhood.toLowerCase().replace(/ /g, '-')}`;

  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== false && value !== undefined) {
      params.append(key, value.toString());
    }
  });

  return `${basePath}?${params.toString()}`;
};
