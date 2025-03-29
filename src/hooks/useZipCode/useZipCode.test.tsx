import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import { fetchZipCode } from '@/services/zipCode';
import { IZipCodeData } from '@/services/zipCode/types';

import { useZipCode } from './index';

// Mock do service
jest.mock('@/services/zipCode');

const mockedFetchZipCode = fetchZipCode as jest.MockedFunction<
  typeof fetchZipCode
>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Desativa retentativas para facilitar os testes
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useZipCode', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return correct zip code', async () => {
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

    mockedFetchZipCode.mockResolvedValue(mockData);

    const { result } = renderHook(() => useZipCode('71936250'), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(mockData);
  });

  it('não deve fazer a requisição se o CEP for inválido', async () => {
    const { result } = renderHook(() => useZipCode('123'), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isPending).toBe(true);
    expect(mockedFetchZipCode).not.toHaveBeenCalled();
  });

  it('deve lidar com erros na requisição', async () => {
    mockedFetchZipCode.mockRejectedValue(new Error('Erro na requisição'));

    const { result } = renderHook(() => useZipCode('00000000'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.error).toEqual(new Error('Erro na requisição'));
  });
});
