import { ISelectOption } from '@/types';

import { formatAndSort } from './index';

describe('formatAndSort', () => {
  it('should sort items alphabetically by label', () => {
    const input: ISelectOption[] = [
      { value: '2', label: 'Zebra' },
      { value: '1', label: 'Apple' },
    ];

    const result = formatAndSort(input);
    expect(result).toEqual([
      { value: '1', label: 'Apple' },
      { value: '2', label: 'Zebra' },
    ]);
  });

  it('should return empty array for empty input', () => {
    const result = formatAndSort([]);
    expect(result).toEqual([]);
  });
});
