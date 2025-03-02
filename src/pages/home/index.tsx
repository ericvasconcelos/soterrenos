import { Container } from '@/components';
import { Page } from '@/layouts/Page';

import { Nearby } from './nearby';
import { SearchForm } from './searchForm';

const Home = () => (
  <Page>
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
          src="/soterrenos-campo-3840.jpg"
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

    <Container>
      <Nearby />
    </Container>
  </Page>
);

export default Home;
