import { IAddress } from '@/types';

import { formatAddress } from './index';

describe('formatAddress', () => {
  const mockAddress: IAddress = {
    street: 'Main St',
    number: '100',
    neighborhood: 'Downtown',
    city: 'Metropolis',
    state: 'SP',
    zipCode: '12345678',
  };

  it('should format full address correctly', () => {
    expect(formatAddress(mockAddress)).toBe(
      'Main St, Downtown, Metropolis, SP - CEP: 12345678'
    );
  });

  it('should include condominium when present', () => {
    expect(
      formatAddress({
        ...mockAddress,
        complement: 'Lote 10',
      })
    ).toBe('Main St, Downtown, Metropolis, SP - CEP: 12345678');
  });

  it('should include condominium when present', () => {
    expect(
      formatAddress({
        ...mockAddress,
        condominium: 'Golden Towers',
      })
    ).toBe('Main St, Golden Towers, Downtown, Metropolis, SP - CEP: 12345678');
  });
});
