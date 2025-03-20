import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { API_URL } from '../envs';

interface IRequest {
  [key: string]: unknown;
}

class ApiClient {
  private readonly _api: AxiosInstance;

  constructor(baseURL: string) {
    this._api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this._api.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this._api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('accessToken');
          window.location.href = '/';
        }
        return Promise.reject(error);
      }
    );
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._api.get<T>(url, config);
  }

  public async post<T>(
    url: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._api.post<T>(url, data, config);
  }

  public async put<T>(
    url: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._api.put<T>(url, data, config);
  }

  public async patch<T>(
    url: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._api.patch<T>(url, data, config);
  }
}

export class ApiService {
  private readonly _apiClient: ApiClient;

  constructor(endpoint: string) {
    const baseURL = API_URL + endpoint;
    this._apiClient = new ApiClient(baseURL);
  }

  public async get<T>(
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._apiClient.get<T>(path, config);
  }

  public async post<T>(
    path: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._apiClient.post<T>(path, data, config);
  }

  public async put<T>(
    path: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._apiClient.put<T>(path, data, config);
  }

  public async patch<T>(
    path: string,
    data?: IRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this._apiClient.patch<T>(path, data, config);
  }
}
