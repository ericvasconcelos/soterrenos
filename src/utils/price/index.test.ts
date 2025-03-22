import { priceFormatter, sanitizePrice, sanitizePriceForSearch } from './index';

describe('Price Helpers', () => {
  describe('priceFormatter', () => {
    it('should format numbers to BRL currency', () => {
      expect(priceFormatter(1500.99)).toBe('R$ 1.500,99');
    });
  });

  describe('sanitizePrice', () => {
    it('should convert formatted string to number', () => {
      expect(sanitizePrice('R$ 1.500,99')).toBe(1500.99);
    });
  });

  describe('sanitizePriceForSearch', () => {
    it('should prepare price for API requests', () => {
      expect(sanitizePriceForSearch('R$ 1.500,99')).toBe('1500.99');
    });
  });
});
