import { getTotalArea } from './index';

describe('getTotalArea', () => {
  it('should calculate irregular land area correctly', () => {
    const landSize = {
      front: 10,
      back: 15,
      left: 20,
      right: 25,
    };

    const result = getTotalArea(landSize);

    expect(result.value).toBeCloseTo(281.25);
    expect(result.text).toBe('281m²');
  });
});
