export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="pt-BR"></html>',
    url: 'https://soterrenos.net/',
    userAgent: 'Agent/007',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/constants(.*)$': '<rootDir>/constants$1',
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/contexts(.*)$': '<rootDir>/contexts$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/services(.*)$': '<rootDir>/services$1',
    '^@/utils(.*)$': '<rootDir>/utils$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Adicione esta linha
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
