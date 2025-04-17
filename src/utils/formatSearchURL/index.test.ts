import { formatSearchURL } from './index';

describe('formatSearchURL', () => {
  it('should construct URL with valid filters', () => {
    const result = formatSearchURL('SP', 'São Paulo', {
      minPrice: '100000',
      fgts: true,
    });

    expect(result).toBe('/vendas/SP/São Paulo?minPrice=100000&fgts=true');
  });

  it('should ignore empty filters', () => {
    const result = formatSearchURL('SP', 'São Paulo', {
      minPrice: '',
      fgts: false,
    });

    expect(result).toBe('/vendas/SP/São Paulo');
  });
});
