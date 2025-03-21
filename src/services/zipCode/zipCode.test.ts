import axios from 'axios';

import { fetchZipCode } from './index';
import { IZipCodeData } from './types';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockValidResponse: IZipCodeData = {
  cep: '71936-250',
  logradouro: 'Avenida das Araucárias',
  complemento: '',
  bairro: 'Sul (Águas Claras)',
  localidade: 'Brasília',
  uf: 'DF',
  ibge: '5300108',
  gia: '',
  ddd: '61',
  siafi: '9701',
};

describe('fetchZipCode service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the zip code data correctly', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockValidResponse });
    const result = await fetchZipCode('71936250');
    expect(result).toEqual(mockValidResponse);
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('/ws/71936250/json/')
    );
  });

  it('should throw an error when the zip code is invalid', async () => {
    mockedAxios.get.mockResolvedValue({ data: { erro: true } });
    await expect(fetchZipCode('00000000')).rejects.toThrow(
      'CEP não encontrado'
    );
  });

  it('should throw an error on network failure', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Erro na busca do CEP'));
    await expect(fetchZipCode('71936250')).rejects.toThrow(
      'Erro na busca do CEP'
    );
  });
});
