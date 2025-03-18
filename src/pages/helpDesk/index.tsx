import { Container, Text } from '@/components';
import { Accordion } from '@/components/Accordion';
import { Page } from '@/layouts/Page';

import { ContactForm } from './contactForm';
import { infos } from './data';

const HelpDesk = () => (
  <Page>
    <Container>
      <div className="mb-20">
        <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
          Central de Ajuda
        </Text>

        <Accordion infos={infos} />
      </div>

      <ContactForm />
    </Container>
  </Page>
);

export default HelpDesk;
