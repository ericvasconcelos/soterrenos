/**
 * @jest-environment jsdom
 */

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: new URL('https://soterrenos.net/'),
  });
});

test('use jsdom and set the URL in this test file', () => {
  expect(window.location.href).toBe('https://soterrenos.net/');
});
