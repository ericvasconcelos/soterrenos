import { validateCNPJ, validateCPF } from './index';

describe('Document Validation', () => {
  describe('validateCPF', () => {
    it('should validate correct CPF numbers', () => {
      expect(validateCPF('123.456.789-09')).toBe(true);
    });

    it('should reject invalid CPF numbers', () => {
      expect(validateCPF('111.111.111-11')).toBe(false);
    });
  });

  describe('validateCNPJ', () => {
    it('should validate correct CNPJ numbers', () => {
      expect(validateCNPJ('11.222.333/0001-81')).toBe(true);
    });

    it('should reject invalid CNPJ numbers', () => {
      expect(validateCNPJ('00.000.000/0000-00')).toBe(false);
    });
  });
});
