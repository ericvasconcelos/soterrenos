import { normalizeText } from './index';

describe('normalizeText', () => {
  it('should handle empty string', () => {
    expect(normalizeText('')).toBe('');
  });

  it('should remove accents and diacritics', () => {
    expect(normalizeText('ÁÉÍÓÚáéíóú')).toBe('aeiouaeiou');
    expect(normalizeText('ÀÈÌÒÙàèìòù')).toBe('aeiouaeiou');
    expect(normalizeText('ÂÊÎÔÛâêîôû')).toBe('aeiouaeiou');
    expect(normalizeText('ÃÕÑãõñ')).toBe('aonaon');
  });

  it('should convert spaces to hyphens', () => {
    expect(normalizeText('text with spaces')).toBe('text-with-spaces');
    expect(normalizeText('multiple   spaces')).toBe('multiple-spaces');
  });

  it('should handle special characters', () => {
    expect(normalizeText('Hello!@#$%^&*()_+{}[]|\\:"<>?~`')).toBe(
      'hello!@#$%^&*()_+{}[]|\\:"<>?~`'
    );
  });

  it('should convert to lowercase', () => {
    expect(normalizeText('UPPERCASE')).toBe('uppercase');
    expect(normalizeText('MixEdCaSe')).toBe('mixedcase');
  });

  it('should handle complex strings', () => {
    expect(normalizeText('São Paulo, 2023!')).toBe('sao-paulo,-2023!');
    expect(normalizeText('Normälîzâtïon')).toBe('normalization');
  });

  it('should handle edge cases', () => {
    expect(normalizeText('   leading-trailing   ')).toBe('leading-trailing');
    expect(normalizeText('a')).toBe('a');
    expect(normalizeText('A-B_C')).toBe('a-b_c');
  });
});
