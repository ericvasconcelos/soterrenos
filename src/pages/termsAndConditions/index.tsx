import { useState } from 'react';

import { Button, Card, Container, Text } from '@/components';

import { chapters } from './data';

const TermsAndConditions = () => {
  const [isGood, setIsGood] = useState<boolean | undefined>();

  return (
    <>
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
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="mb-14">
              <Text tag="h2" size="lg" weight="bold" className="mb-6 uppercase">
                {chapterIndex + 1}. {chapter.title}
              </Text>
              {chapter.paragraphs.map((paragraph, paragraphIndex) => (
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
