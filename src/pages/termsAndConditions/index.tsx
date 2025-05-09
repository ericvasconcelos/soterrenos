import { useState } from 'react';

import { Button, Card, Container, Text } from '@/components';
import { SEO } from '@/layouts/Seo';

import { chapters } from './data';

const TermsAndConditions = () => {
  const [isGood, setIsGood] = useState<boolean | undefined>();

  return (
    <>
      <SEO
        title="Termos de Uso e Política de Privacidade"
        description="Conheça nossas políticas de transparência e segurança de dados. Compromisso com a ética e legislação vigente."
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Termos e Condições',
          datePublished: '2024-01-01',
          author: {
            '@type': 'Organization',
            name: 'Só Terrenos',
          },
        }}
      />

      <Container>
        <div className="mb-20">
          <Text
            tag="h1"
            size="2xl"
            weight="bold"
            className="mt-12 mb-8 uppercase"
          >
            Termos de uso e política de privacidade
          </Text>
          {chapters?.map(({ title, paragraphs }, chapterIndex) => (
            <div key={chapterIndex} className="mb-14">
              <Text tag="h2" size="lg" weight="bold" className="mb-6 uppercase">
                {chapterIndex + 1}. {title}
              </Text>
              {paragraphs?.map((paragraph, paragraphIndex) => (
                <Text key={paragraphIndex} className="mb-4">
                  {chapterIndex + 1}.{paragraphIndex + 1}. {paragraph}
                </Text>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <Card hasShadow>
            <Text
              tag="h2"
              size="lg"
              weight="bold"
              align="center"
              className="mb-6 uppercase"
            >
              Você acha que esse conteúdo foi útil?
            </Text>

            <nav className="flex justify-center gap-6">
              <Button
                onClick={() => setIsGood(true)}
                variant={isGood ? 'primary' : 'secondary'}
                icon="thumb-up"
              >
                Super útil
              </Button>

              <Button
                onClick={() => setIsGood(false)}
                variant={isGood === false ? 'primary' : 'secondary'}
                icon="thumb-down"
              >
                Precisa melhorar
              </Button>
            </nav>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
