import axios, { AxiosInstance } from 'axios';

jest.mock('axios');
export const mockedAxios = axios as jest.Mocked<typeof axios>;
interface ErrorHandler {
  (error: unknown): Promise<never>;
}

export const mockRequestInterceptor = jest.fn();

export const mockResponseInterceptor: jest.Mock<unknown, unknown[]> & {
  errorHandler?: ErrorHandler;
} = jest.fn();

export const axiosInstanceMock: AxiosInstance = {
  interceptors: {
    request: {
      use: jest.fn((onFulfilled: (value: unknown) => unknown): number => {
        mockRequestInterceptor.mockImplementation(onFulfilled);
        return 1; // Retorna um ID fictício para o interceptor
      }),
    },
    response: {
      use: jest.fn(
        (
          onFulfilled: (value: unknown) => unknown,
          onRejected?: ErrorHandler
        ): number => {
          mockResponseInterceptor.mockImplementation(onFulfilled);
          mockResponseInterceptor.errorHandler = onRejected;
          return 1; // Retorna um ID fictício para o interceptor
        }
      ),
    },
  },
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  defaults: {
    headers: {
      common: {},
    },
  },
} as unknown as AxiosInstance;

mockedAxios.create.mockReturnValue(axiosInstanceMock);
