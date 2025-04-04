import { lazy, Suspense } from 'react';

import { Container, Spinner } from '@/components';
import { SEO } from '@/layouts/Seo';

import { SearchForm } from './searchForm';

const Nearby = lazy(() =>
  import('./nearby').then((module) => ({ default: module.Nearby }))
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
    />

    <div className="relative w-full h-[530px]">
      <picture>
        <source
          media="(min-width: 1536px)"
          srcSet="/home/soterrenos-campo-3840.jpg"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="/home/soterrenos-campo-1536.jpg"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/home/soterrenos-campo-1280.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/home/soterrenos-campo-1024.jpg"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/home/soterrenos-campo-768.jpg"
        />
        <source
          media="(min-width: 0px)"
          srcSet="/home/soterrenos-campo-640.jpg"
        />
        <img
          src="/home/soterrenos-campo-3840.jpg"
          alt="Campo com rio e vegetação"
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Container>
          <SearchForm />
        </Container>
      </div>
    </div>

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
