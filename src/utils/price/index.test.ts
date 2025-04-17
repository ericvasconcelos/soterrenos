import { priceFormatter, sanitizePrice } from './index';

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
});
