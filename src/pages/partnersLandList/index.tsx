import { lazy, Suspense } from 'react';
import { useParams, useSearchParams } from 'react-router';

import { Container, LandCard, Pagination, Skeleton, Text } from '@/components';
import { useLandsByUser } from '@/hooks/useLandList';
import { useGetUserData } from '@/hooks/useUser';
import { SEO } from '@/layouts/Seo';
import { generateArray, getPartnerName } from '@/utils';

const MatchNotFound = lazy(() =>
  import('@/components/MatchNotFound').then((module) => ({
    default: module.MatchNotFound,
  }))
);

const PartnersLandList = () => {
  const { id } = useParams();
  const fakeList = generateArray(8);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1') || 1;
  const size = parseInt(searchParams.get('size') || '30') || 30;

  const { data: user } = useGetUserData(id);

  console.log(user);

  const { data, isLoading, lastPage, prevPage, nextPage } = useLandsByUser(
    id,
    page,
    size,
    true
  );

  const handlePageChange = (newPage: number) => {
    const params: Record<string, string> = {
      page: String(newPage),
      size: String(size),
    };

    setSearchParams(params);
  };

  const partnerName = getPartnerName({
    type: user?.type,
    personalFirstName: user?.personalFirstName,
    personalLastName: user?.personalLastName,
    tradeName: user?.tradeName,
  });

  return (
    <>
      <SEO
        title={`List de terrenos do parcerio ${partnerName} | Divulgue Terrenos`}
        description="Amplie seu alcance! Cadastre seus terrenos em nossa plataforma e conecte-se a compradores qualificados."
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: `Só Terrenos - Lista de terrenos do ${partnerName}`,
          url: 'https://soterrenos.com.br/corretores',
          description: `Lista de terrenos para o parceiro ${partnerName} divulgar e vender rápido`,
        }}
      />
      <Container>
        <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
          Lista de terrenos do {partnerName}
        </Text>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading &&
            data?.length === 0 &&
            fakeList?.map((item) => (
              <Skeleton key={item} name="card" height={233} className="mb-4" />
            ))}

          {!isLoading &&
            data?.map((land) => <LandCard key={land.id} {...land} />)}
        </div>

        {!isLoading && data?.length === 0 && (
          <Suspense>
            <MatchNotFound title="Nenhum terreno foi encontrado" />
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

export default PartnersLandList;
