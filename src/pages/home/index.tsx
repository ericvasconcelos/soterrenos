import { lazy, Suspense } from 'react';

import { Container, Spinner } from '@/components';
import { SEO } from '@/layouts/Seo';

import { SearchForm } from './searchForm';

const Nearby = lazy(() =>
  import('./nearby').then((module) => ({ default: module.Nearby }))
);

const HowItWorks = lazy(() =>
  import('./howItWorks').then((module) => ({ default: module.HowItWorks }))
);

const Home = () => (
  <>
    <SEO
      title="Terrenos à Venda no Distrito Federal e Entorno"
      description="Encontre seu terreno ideal no DF e região! Conectamos compradores e vendedores com agilidade, transparência e as melhores condições. Verificação rigorosa de dados."
      schemaMarkup={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Só Terrenos',
        url: 'https://soterrenos.com.br',
        description:
          'Plataforma especializada em compra e venda de terrenos no Distrito Federal e entorno',
        potentialAction: {
          '@type': 'SearchAction',
          target:
            'https://soterrenos.com.br/vendas/{state}/{city}/{neighborhood}',
          'query-input': 'required name=location',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Só Terrenos',
          mission:
            'Conectar vendedores e compradores de terrenos de forma ágil e barata',
          founder: 'Nome do Fundador (opcional)',
        },
      }}
    >
      <link rel="preload" href="/home/icons/searching-lands.svg" as="image" />
    </SEO>

    <div className="relative w-full h-[654px] md:h-[530px] bg-white bg-[url('/home/bg/hero-bg.svg')] bg-repeat bg-center mb-12">
      <picture className="opacity-85">
        <source
          media="(min-width: 1536px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <source
          media="(min-width: 0px)"
          srcSet="/home/soterrenos-campo-3840.webp"
        />
        <img
          src="/home/soterrenos-campo-3840.webp"
          alt="Campo com rio e vegetação"
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Container className="h-full md:flex md:items-center py-12 md:py-0">
          <SearchForm />
        </Container>
      </div>
    </div>

    <Container>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[200px]">
            <Spinner size="lg" />
          </div>
        }
      >
        <Nearby />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[200px]">
            <Spinner size="lg" />
          </div>
        }
      >
        <HowItWorks />
      </Suspense>
    </Container>
  </>
);

export default Home;
