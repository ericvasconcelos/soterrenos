import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { axiosInstanceMock } from './../helper-test';
import { fetchZipCode } from '.';
import { IZipCodeData } from './types';

describe('fetchZipCode', () => {
  const validZipCode = '12345678';
  const invalidZipCode = '00000000';

  const mockZipCodeData: IZipCodeData = {
    cep: '12345-678',
    logradouro: 'Rua Exemplo',
    complemento: 'Apto 101',
    bairro: 'Centro',
    localidade: 'Cidade Exemplo',
    uf: 'ST',
    ibge: '1234567',
    gia: '',
    ddd: '12',
    siafi: '7654321',
  };

  it('deve retornar os dados do CEP corretamente', async () => {
    const response: AxiosResponse<IZipCodeData> = {
      data: mockZipCodeData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {} as InternalAxiosRequestConfig<unknown>,
    };

    (axiosInstanceMock.get as jest.Mock).mockResolvedValue(response);
    const result = await fetchZipCode(validZipCode);
    expect(result).toEqual(mockZipCodeData);
  });

  it('deve lançar um erro se o CEP for inválido', async () => {
    const error = new Error('CEP inválido');
    (axiosInstanceMock.get as jest.Mock).mockRejectedValue(error);
    const result = fetchZipCode(invalidZipCode);
    await expect(result).rejects.toThrow('CEP inválido');
  });
});
