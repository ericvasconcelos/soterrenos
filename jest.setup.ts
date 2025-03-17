import '@testing-library/jest-dom';

jest.mock('./src/envs', () => ({
  API_URL: 'https://viacep.com.br',
}));

global.TextEncoder = require('util').TextEncoder;

// global.window.gtag = jest.fn()
global.ResizeObserver = require('resize-observer-polyfill');

global.DOMRect = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  prototype: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  }),
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: () => null,
  }),
};

// Mock de sessionStorage
const mockSessionStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage,
});

// Mock de window.location
const originalWindowLocation = window.location;
Object.defineProperty(window, 'location', {
  value: {
    ...originalWindowLocation,
    href: '',
  },
  writable: true,
});
