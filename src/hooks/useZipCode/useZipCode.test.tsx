import { renderHook, waitFor } from '@testing-library/react';
import { useZipCode } from '.';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchZipCode } from '../../services/zipCode';
import { IZipCodeData } from '../../services/zipCode/types';

// Mock do service
jest.mock('../../services/zipCode');
const mockedFetchZipCode = fetchZipCode as jest.MockedFunction<
  typeof fetchZipCode
>;

describe('useZipCode', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Cria um QueryClient para o teste
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

    // Configura o mock do service para retornar os dados simulados
    mockedFetchZipCode.mockResolvedValue(mockData);

    // Renderiza o hook
    const { result } = renderHook(() => useZipCode('71936250'), {
      wrapper: createWrapper(),
    });

    // Verifica o estado inicial (carregando)
    expect(result.current.isLoading).toBe(true);

    // Aguarda a conclusão da requisição
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Verifica os dados retornados
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual(mockData);
  });

  it('não deve fazer a requisição se o CEP for inválido', async () => {
    // Renderiza o hook com um CEP inválido
    const { result } = renderHook(() => useZipCode('123'), {
      wrapper: createWrapper(),
    });

    // Verifica que a requisição não foi feita
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isPending).toBe(true);
    expect(mockedFetchZipCode).not.toHaveBeenCalled();
  });

  it('deve lidar com erros na requisição', async () => {
    // Configura o mock do service para simular um erro
    mockedFetchZipCode.mockRejectedValue(new Error('Erro na requisição'));

    // Renderiza o hook
    const { result } = renderHook(() => useZipCode('00000000'), {
      wrapper: createWrapper(),
    });

    // Aguarda a conclusão da requisição
    await waitFor(() => expect(result.current.isError).toBe(true));

    // Verifica o erro
    expect(result.current.error).toEqual(new Error('Erro na requisição'));
  });
});
