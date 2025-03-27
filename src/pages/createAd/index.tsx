import { useParams } from 'react-router';

import { Container, Text } from '@/components';

import { CreateAdForm } from './form';

export default function CreateAdvertisement() {
  const { id } = useParams();

  return (
    <Container>
      <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
        {id === 'novo' ? 'Criando um novo anúncio' : 'Editando anúncio'}
      </Text>

      <CreateAdForm />
    </Container>
  );
}
