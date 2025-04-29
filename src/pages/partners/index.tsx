import { lazy, Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import { Container, Input, Pagination, Skeleton, Text } from '@/components';
import { SEO } from '@/layouts/Seo';
import { IUser } from '@/types';
import { generateArray, getPartnerName } from '@/utils';

import { useUsersByType } from './hooks';
import { PartnerCard } from './partnerCard';
import { IPartner } from './types';

const MatchNotFound = lazy(() =>
  import('@/components/MatchNotFound').then((module) => ({
    default: module.MatchNotFound,
  }))
);

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
          fakeList?.map((item) => (
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
          <Suspense>
            <MatchNotFound title="Nenhum resultado encontrado" />
          </Suspense>
        )}

        <Pagination
          changePage={handlePageChange}
          currentPage={page}
          lastPage={lastPage}
          prevPage={prevPage}
          nextPage={nextPage}
          size={size}
        />
      </Container>
    </>
  );
};

export default Partners;
