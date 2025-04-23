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

    <div className="relative w-full pt-12 bg-white bg-[url('/home/bg/hero-bg.svg')] bg-repeat bg-center">
      <Container>
        <SearchForm />
      </Container>
    </div>

    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[200px]">
          <Spinner size="lg" />
        </div>
      }
    >
      <HowItWorks />
    </Suspense>

    <Container className="mt-16 mb-16">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[200px]">
            <Spinner size="lg" />
          </div>
        }
      >
        <Nearby />
      </Suspense>
    </Container>
  </>
);

export default Home;
