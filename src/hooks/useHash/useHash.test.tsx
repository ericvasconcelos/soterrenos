import { renderHook, act } from '@testing-library/react';
import useHash from '.';

describe('useHash', () => {
  it('should set isClient to true after mounting', () => {
    const { result } = renderHook(() => useHash());
    expect(result.current).toBe('');

    act(() => {
      window.location.hash = '#test-hash';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });

    expect(result.current).toBe('test-hash'); // After mounting, it should update to the current hash
  });

  it('should return the current hash', () => {
    Object.defineProperty(window, 'location', {
      value: {
        hash: '#test-hash',
      },
    });

    const { result } = renderHook(() => useHash());
    expect(result.current).toBe('test-hash');
  });
});
