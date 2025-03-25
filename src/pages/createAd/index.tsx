import { useParams } from 'react-router';

import { Container, Text } from '@/components';
import { Page } from '@/layouts/Page';

import { CreateAdForm } from './form';

export default function CreateAdvertisement() {
  const { id } = useParams();

  return (
    <Page>
      <Container>
        <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
          {id === 'novo' ? 'Criando um novo anúncio' : 'Editando anúncio'}
        </Text>

        <CreateAdForm />
      </Container>
    </Page>
  );
}
