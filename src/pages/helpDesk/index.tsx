import { Container, Text } from '@/components';
import { Accordion } from '@/components/Accordion';
import { SEO } from '@/layouts/Seo';

import { ContactForm } from './contactForm';
import { infos } from './data';

const HelpDesk = () => (
  <>
    <SEO
      title="Central de Ajuda"
      description="Tire suas dúvidas sobre compra, venda ou uso da plataforma. Suporte ágil e personalizado para você!"
      schemaMarkup={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: infos.map((info) => ({
          '@type': 'Question',
          name: info.title,
          acceptedAnswer: {
            '@type': 'Answer',
            text: info.description,
          },
        })),
      }}
    />

    <Container>
      <div className="mb-20">
        <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
          Central de Ajuda
        </Text>

        <Accordion infos={infos} />
      </div>

      <ContactForm />
    </Container>
  </>
);

export default HelpDesk;
