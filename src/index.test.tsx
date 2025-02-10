/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://soterrenos.net/"}
 */

test('use jsdom and set the URL in this test file', () => {
  expect(window.location.href).toBe('https://soterrenos.net/');
});
