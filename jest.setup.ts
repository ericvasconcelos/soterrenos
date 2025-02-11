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

// Mockando a lista de parceiros
jest.mock('@/classes/Amplitude', () => ({
  Amplitude: {
    track: jest.fn(),
  },
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    locale: 'pt-BR',
  }),
}));

// global.window.gtag = jest.fn()
