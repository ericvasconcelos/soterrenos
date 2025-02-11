import axios from 'axios';
import { fetchZipCode } from '.';
import { IZipCodeData } from './types';

// Mock do axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchZipCode', () => {
  it('deve retornar os dados do CEP corretamente', async () => {
    // Mock dos dados retornados pela API
    const mockData: IZipCodeData = {
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

    // Configura o mock do axios para retornar os dados simulados
    mockedAxios.get.mockResolvedValue({ data: mockData });

    // Chama a função e verifica o resultado
    const result = await fetchZipCode('71936250');
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://viacep.com.br/ws/71936250/json/'
    );
  });

  it('deve lançar um erro se o CEP for inválido', async () => {
    // Configura o mock do axios para simular um erro
    mockedAxios.get.mockRejectedValue(new Error('CEP inválido'));

    // Verifica se a função lança o erro esperado
    await expect(fetchZipCode('00000000')).rejects.toThrow('CEP inválido');
  });
});
