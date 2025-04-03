import { useCallback, useMemo, useState } from 'react';
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
import { SEO } from '@/layouts/Seo';
import { IBasePartner } from '@/types';
import { filterPhoneMask } from '@/utils';

import { isAgency, isSalesperson } from './helper';
import { IPartner } from './types';

const Partners = <T extends IBasePartner>({ data, variants }: IPartner<T>) => {
  const { singular, plural, article } = variants;
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

  const getPartnerName = useCallback((info: T) => {
    if (isSalesperson(info)) return `${info.firstName} ${info.lastName}`;
    if (isAgency(info)) return info.tradeName;
    return '';
  }, []);

  const filteredData = useMemo(
    () =>
      data.filter((item) => {
        const searchLower = searchText.toLowerCase();
        return (
          getPartnerName(item).toLowerCase().includes(searchLower) ||
          item.servedCities.some(
            (city) =>
              city.city.toLowerCase().includes(searchLower) ||
              city.state.toLowerCase().includes(searchLower)
          )
        );
      }),
    [data, getPartnerName, searchText]
  );

  const { paginatedList, totalPages } = useMemo(() => {
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const list = filteredData.slice(startIndex, endIndex);
    const pages = Math.ceil(filteredData.length / size);

    return {
      paginatedList: list,
      totalPages: pages,
    };
  }, [filteredData, page, size]);

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
    <>
      <SEO
        title={`Parceria com ${plural} | Divulgue Terrenos`}
        description="Amplie seu alcance! Cadastre seus terrenos em nossa plataforma e conecte-se a compradores qualificados."
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: `Só Terrenos - Parceria para ${plural}`,
          url: 'https://soterrenos.com.br/corretores',
          description: `Plataforma para ${plural} divulgarem terrenos no DF e entorno`,
        }}
      />
      <Container>
        <div className="mb-8">
          <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
            Lista de {plural} da Só Terrenos
          </Text>

          <Input
            id="search"
            name="search"
            label={`Buscar pelo nome do ${singular}, cidade ou estado`}
            placeholder={`Ex: Matheus ou Brasília ou Goiás`}
            value={searchText}
            onChange={(e) => handleSearchChange(e.currentTarget.value)}
          />
        </div>

        {paginatedList.map((info) => {
          const partnerName = getPartnerName(info);
          return (
            <Card
              hasShadow
              className="grid md:grid-cols-[auto_280px] gap-4 mb-4"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  {info?.image?.src && <Avatar image={info.image} size="2xl" />}

                  <div className="flex flex-col items-start gap-1">
                    <Text tag="h2" size="xl" weight="bold">
                      {partnerName}
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

                    {info.creci && <Text size="sm">CRECI: {info.creci}</Text>}

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
                      `Olá ${partnerName}, gostaria de saber algumas informações importantes sobre o seu trabalho.`
                    )
                  }
                  variant="primary"
                >
                  Falar com {article} {singular}
                </Button>

                <Button
                  onClick={() =>
                    handleSendMessage(
                      info.whatsappNumber,
                      `Olá ${partnerName}, gostaria de solicitar a avaliação do meu terreno.`
                    )
                  }
                  variant="secondary"
                >
                  Solicitar Avaliação do Terreno
                </Button>
              </nav>
            </Card>
          );
        })}

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
    </>
  );
};

export default Partners;
