import { useParams } from 'react-router';

import { Container, Skeleton, Text } from '@/components';
import { useFetchLand } from '@/hooks/useLand';

import { CreateAdForm } from './form';

export default function CreateAdvertisement() {
  const { id } = useParams();
  const { data, isLoading } = useFetchLand(id !== 'novo' ? id : '');

  return (
    <Container>
      <div className="flex items-center justify-between gap-4 mt-12 mb-8">
        <Text tag="h1" size="2xl" weight="bold">
          {id === 'novo' ? 'Criando um novo anúncio' : 'Editando anúncio'}
        </Text>

        {id !== 'novo' && !!data && (
          <a
            href={`/anuncios/${id}/${data?.slug}`}
            target="_blank"
            className="text-primary-700 font-medium hover:bg-primary-100 px-4 py-2 rounded-md transition-colors"
          >
            Ver anúncio
          </a>
        )}
      </div>

      {id !== 'novo' && isLoading && (
        <>
          <Skeleton height={502} borderRadius={12} className="mb-8" />
          <Skeleton height={327} borderRadius={12} className="mb-8" />
        </>
      )}

      {(id === 'novo' || !!data) && !isLoading && (
        <CreateAdForm defaultValues={data} />
      )}
    </Container>
  );
}
