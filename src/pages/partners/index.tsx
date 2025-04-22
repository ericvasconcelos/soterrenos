import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import {
  Button,
  Container,
  Input,
  MatchNotFound,
  Skeleton,
  Text,
} from '@/components';
import { SEO } from '@/layouts/Seo';
import { IUser } from '@/types';
import { generateArray, getPartnerName } from '@/utils';

import { useUsersByType } from './hooks';
import { PartnerCard } from './partnerCard';
import { IPartner } from './types';

const Partners = ({ type, variants }: IPartner) => {
  const fakeList = generateArray(4);
  const { singular, plural, article } = variants;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1') || 1;
  const size = parseInt(searchParams.get('size') || '10') || 10;
  const urlSearchText = searchParams.get('searchText') || '';

  const [searchText, setSearchText] = useState(urlSearchText);

  const { data, isLoading, lastPage, prevPage, nextPage } = useUsersByType(
    type,
    page,
    size
  );

  const filteredData = useMemo(
    () =>
      data.filter((user: IUser) => {
        const searchLower = searchText.toLowerCase();
        return (
          getPartnerName(user).toLowerCase().includes(searchLower) ||
          user?.servedCities?.some(
            (city) =>
              city?.city?.toLowerCase().includes(searchLower) ||
              city?.state?.toLowerCase().includes(searchLower)
          )
        );
      }),
    [data, searchText]
  );

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = {
      page: String(newPage),
      size: String(size),
    };

    if (searchText) {
      params.searchText = searchText;
    }

    setSearchParams(params);
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

        {isLoading &&
          filteredData?.length === 0 &&
          fakeList.map((item) => (
            <Skeleton key={item} name="card" height={233} className="mb-4" />
          ))}

        {!isLoading &&
          filteredData?.map((user) => (
            <PartnerCard
              key={user.id}
              {...user}
              article={article}
              singular={singular}
            />
          ))}

        {!isLoading && filteredData?.length === 0 && (
          <MatchNotFound title="Nenhum resultado encontrado" />
        )}

        <div className="flex justify-between gap-4 mt-8 mb-12">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handlePageChange(prevPage)}
              disabled={!prevPage}
              variant="tertiary"
            >
              Anterior
            </Button>

            <Text className="mx-4">
              Página {page} de {lastPage || '1'}
            </Text>

            <Button
              onClick={() => handlePageChange(nextPage)}
              disabled={page >= nextPage}
              variant="tertiary"
            >
              Próximo
            </Button>
          </div>

          <div className="flex justify-end items-center gap-2">
            <Text tag="label">Itens por página:</Text>
            <select
              id="size"
              name="size"
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
