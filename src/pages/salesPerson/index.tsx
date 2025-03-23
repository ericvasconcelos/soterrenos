import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import {
  Avatar,
  Button,
  Card,
  Container,
  Icon,
  Input,
  Text,
} from '@/components';
import { salespersonList } from '@/data';
import { Page } from '@/layouts/Page';
import { filterPhoneMask } from '@/utils';

const SalesPerson = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1') || 1;
  const size = parseInt(searchParams.get('size') || '10') || 10;
  const urlSearchText = searchParams.get('searchText') || '';

  const [searchText, setSearchText] = useState(urlSearchText);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleSendMessage = (whatsappNumber: string, message: string) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=55${whatsappNumber}&text=${message}`
    );
  };

  const filteredSalespersonList = useMemo(
    () =>
      salespersonList.filter((person) => {
        const searchLower = searchText.toLowerCase();
        return (
          `${person.firstName} ${person.lastName}`
            .toLowerCase()
            .includes(searchLower) ||
          person.servedCities.some(
            (city) =>
              city.city.toLowerCase().includes(searchLower) ||
              city.state.toLowerCase().includes(searchLower)
          )
        );
      }),
    [searchText]
  );

  const { paginatedSalespersonList, totalPages } = useMemo(() => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const list = filteredSalespersonList.slice(startIndex, endIndex);
    const pages = Math.ceil(filteredSalespersonList.length / size);

    return {
      paginatedSalespersonList: list,
      totalPages: pages,
    };
  }, [filteredSalespersonList, page, size]);

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = {
      page: String(newPage),
      size: String(size),
    };

    if (searchText) {
      params.searchText = searchText;
    }

    setSearchParams(params);
    setShowPhoneNumber(false);
    setShowEmail(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);

    const params: Record<string, string> = {
      page: '1',
      size: String(size),
    };

    if (value) {
      params.searchText = value;
    }

    setSearchParams(params);
  };

  return (
    <Page>
      <Container>
        <div className="mb-8">
          <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
            Lista de corretores da Só Terrenos
          </Text>

          <Input
            id="search"
            name="search"
            label="Buscar por corretor pelo nome, cidade ou estado"
            placeholder="Ex: Corretor legal ou Brasília ou Goiás"
            value={searchText}
            onChange={(e) => handleSearchChange(e.currentTarget.value)}
          />
        </div>

        {paginatedSalespersonList.map((info) => (
          <Card hasShadow className="grid md:grid-cols-[auto_280px] gap-4 mb-4">
            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Avatar
                  image={info.image}
                  firstName={info.firstName}
                  lastName={info.lastName}
                  size="2xl"
                />

                <div className="flex flex-col items-start gap-1">
                  <Text tag="h2" size="xl" weight="bold">
                    {info.firstName} {info.lastName}
                  </Text>

                  <Text size="sm" className="flex items-center gap-1">
                    <Icon name="phone" size={20} />
                    {filterPhoneMask(
                      info.phoneNumber.slice(0, showPhoneNumber ? 11 : 5)
                    )}
                    {!showPhoneNumber && (
                      <button
                        className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                        onClick={() => setShowPhoneNumber(true)}
                      >
                        Ver email
                      </button>
                    )}
                  </Text>

                  <Text size="sm" className="flex items-center gap-1">
                    <Icon name="mail" size={20} />
                    {info.email.slice(0, showEmail ? 999 : 7)}
                    {!showEmail && (
                      <button
                        className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                        onClick={() => setShowEmail(true)}
                      >
                        Ver telefone
                      </button>
                    )}
                  </Text>

                  <Text size="sm">CRECI: {info.creci}</Text>

                  <Text size="sm">
                    Terrenos vendidos: <b>{info.purchaseNotice}</b>
                  </Text>

                  <Text
                    size="xs"
                    className="inline-block bg-gray-200 rounded-sm px-3 py-1"
                  >
                    Parceiro desde {info.since}
                  </Text>
                </div>
              </div>
              <Text size="sm" color="gray-700">
                Atendimento:{' '}
                {info.servedCities
                  .map(({ city, state }) => `${city} - ${state}`)
                  .join(', ')}
              </Text>
            </div>

            <nav className="flex flex-col gap-4">
              <Button
                onClick={() =>
                  handleSendMessage(
                    info.whatsappNumber,
                    `Olá ${info.firstName}, gostaria de saber algumas informações importantes sobre o seu trabalho.`
                  )
                }
                variant="primary"
              >
                Falar com Corretor
              </Button>

              <Button
                onClick={() =>
                  handleSendMessage(
                    info.whatsappNumber,
                    `Olá ${info.firstName}, gostaria de solicitar a avaliação do meu terreno.`
                  )
                }
                variant="secondary"
              >
                Solicitar Avaliação do Terreno
              </Button>
            </nav>
          </Card>
        ))}

        <div className="flex justify-between gap-4 mt-8 mb-12">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              variant="tertiary"
            >
              Anterior
            </Button>

            <Text className="mx-4">
              Página {page} de {totalPages}
            </Text>

            <Button
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= totalPages}
              variant="tertiary"
            >
              Próximo
            </Button>
          </div>

          <div className="flex justify-end items-center gap-2">
            <Text>Itens por página:</Text>
            <select
              value={size}
              onChange={(e) => {
                setSearchParams({ page: '1', size: e.target.value });
              }}
              className="border border-gray-500 rounded px-2 py-1 outline-0"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </Container>
    </Page>
  );
};

export default SalesPerson;
