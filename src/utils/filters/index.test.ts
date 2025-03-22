import {
  filterCNPJMask,
  filterCPFMask,
  filterMoneyMask,
  filterPhoneMask,
} from './index';

describe('Input Filters', () => {
  describe('filterPhoneMask', () => {
    it('should format landline numbers correctly', () => {
      expect(filterPhoneMask('1122223333')).toBe('(11) 2222-3333');
    });

    it('should format mobile numbers correctly', () => {
      expect(filterPhoneMask('11999991111')).toBe('(11) 99999-1111');
    });
  });

  describe('filterCPFMask', () => {
    it('should format valid CPF numbers', () => {
      expect(filterCPFMask('12345678900')).toBe('123.456.789-00');
    });
  });

  describe('filterCNPJMask', () => {
    it('should format valid CNPJ numbers', () => {
      expect(filterCNPJMask('11222333000181')).toBe('11.222.333/0001-81');
    });
  });

  describe('filterMoneyMask', () => {
    it('should format valid currency values', () => {
      expect(filterMoneyMask('100000')).toBe('R$ 1.000,00');
    });

    it('should return empty string for invalid input', () => {
      expect(filterMoneyMask('invalid')).toBe('');
    });
  });
});
