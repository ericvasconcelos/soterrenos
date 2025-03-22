import { formatSearchURL } from './index';

describe('formatSearchURL', () => {
  it('should construct URL with valid filters', () => {
    const result = formatSearchURL('SP', 'São Paulo', 'Moema', {
      minPrice: '100000',
      fgts: true,
    });

    expect(result).toBe('/vendas/sp/sao-paulo/moema?minPrice=100000&fgts=true');
  });

  it('should ignore empty filters', () => {
    const result = formatSearchURL('SP', 'São Paulo', 'Moema', {
      minPrice: '',
      fgts: false,
    });

    expect(result).toBe('/vendas/sp/sao-paulo/moema');
  });
});
