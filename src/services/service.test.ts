import { AxiosInstance, AxiosResponse, CreateAxiosDefaults } from 'axios';

import { API_URL } from '../envs';
import {
  axiosInstanceMock,
  mockedAxios,
  mockRequestInterceptor,
  mockResponseInterceptor,
} from './helper-test';
import { HttpService } from './index';

mockedAxios.create.mockImplementation(
  (config?: CreateAxiosDefaults<unknown>): AxiosInstance => {
    axiosInstanceMock.defaults.headers.common = config?.headers
      ? (config.headers as Record<string, string>)
      : {};
    return axiosInstanceMock;
  }
);

describe('HttpService', () => {
  const baseURL = `${API_URL}/test`;
  let httpService: HttpService;
  let instance: jest.Mocked<AxiosInstance>;

  beforeEach(() => {
    jest.clearAllMocks();
    window.sessionStorage.clear();
    window.location.href = '';
    httpService = new HttpService('/test');
    instance = mockedAxios.create.mock.results[0].value;
  });

  describe('ApiClient Configuration', () => {
    it('deve criar instância do axios com configurações corretas', () => {
      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    });

    it('deve configurar os headers corretamente', () => {
      expect(
        instance.defaults.headers.common['Access-Control-Allow-Origin']
      ).toBe('*');
      expect(instance.defaults.headers.common['Content-Type']).toBe(
        'application/json'
      );
    });
  });

  describe('Interceptors', () => {
    it('deve adicionar header Authorization quando token existir', async () => {
      window.sessionStorage.setItem('token', 'test-token');
      const mockRequest = { headers: {} };
      const processedRequest = await mockRequestInterceptor(mockRequest);
      expect(processedRequest.headers.Authorization).toBe('Bearer test-token');
    });

    it('não deve adicionar header Authorization quando token não existir', async () => {
      const mockRequest = { headers: {} };
      const processedRequest = await mockRequestInterceptor(mockRequest);
      expect(processedRequest.headers.Authorization).toBeUndefined();
    });

    it('deve redirecionar para / ao receber erro 401', async () => {
      const mockError = { response: { status: 401 } };
      await expect(
        mockResponseInterceptor.errorHandler!(mockError)
      ).rejects.toEqual(mockError);
      expect(window.location.href).toBe('/');
    });

    it('deve rejeitar erro normalmente se não for 401', async () => {
      const mockError = { response: { status: 500 } };
      await expect(
        mockResponseInterceptor.errorHandler!(mockError)
      ).rejects.toEqual(mockError);
      expect(window.location.href).toBe('');
    });
  });

  describe('HTTP Methods', () => {
    const mockData = { result: 'success' };

    it('get() deve fazer chamada correta', async () => {
      instance.get.mockResolvedValue({ data: mockData } as AxiosResponse);
      const response = await httpService.get('/path');
      expect(response.data).toEqual(mockData);
      expect(instance.get).toHaveBeenCalledWith('/path', undefined);
    });

    it('post() deve fazer chamada correta', async () => {
      instance.post.mockResolvedValue({ data: mockData } as AxiosResponse);
      const payload = { key: 'value' };
      const response = await httpService.post('/path', payload);
      expect(response.data).toEqual(mockData);
      expect(instance.post).toHaveBeenCalledWith('/path', payload, undefined);
    });

    it('put() deve fazer chamada correta', async () => {
      instance.put.mockResolvedValue({ data: mockData } as AxiosResponse);
      const payload = { key: 'value' };
      const response = await httpService.put('/path', payload);
      expect(response.data).toEqual(mockData);
      expect(instance.put).toHaveBeenCalledWith('/path', payload, undefined);
    });

    it('patch() deve fazer chamada correta', async () => {
      instance.patch.mockResolvedValue({ data: mockData } as AxiosResponse);
      const payload = { key: 'value' };
      const response = await httpService.patch('/path', payload);
      expect(response.data).toEqual(mockData);
      expect(instance.patch).toHaveBeenCalledWith('/path', payload, undefined);
    });

    it('get() deve tratar erro corretamente', async () => {
      const error = new Error('Network Error');
      instance.get.mockRejectedValue(error);
      await expect(httpService.get('/path')).rejects.toThrow('Network Error');
    });

    it('post() deve tratar erro corretamente', async () => {
      const error = new Error('Request Failed');
      instance.post.mockRejectedValue(error);
      await expect(httpService.post('/path', { key: 'value' })).rejects.toThrow(
        'Request Failed'
      );
    });

    it('put() deve tratar erro corretamente', async () => {
      const error = new Error('Update Failed');
      instance.put.mockRejectedValue(error);
      await expect(httpService.put('/path', { key: 'value' })).rejects.toThrow(
        'Update Failed'
      );
    });

    it('patch() deve tratar erro corretamente', async () => {
      const error = new Error('Patch Error');
      instance.patch.mockRejectedValue(error);
      await expect(
        httpService.patch('/path', { key: 'value' })
      ).rejects.toThrow('Patch Error');
    });
  });
});
