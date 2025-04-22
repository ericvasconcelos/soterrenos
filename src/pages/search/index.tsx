import { Container } from '@/components';

import { SearchForm } from './searchForm';
import { SearchResults } from './searchResults';

const Search = () => (
  <>
    <Container>
      <div className="md:grid md:grid-cols-[320px_auto] xl:grid-cols-[360px_auto] md:gap-4 xl:gap-8 pt-12 mb-20">
        <SearchForm />
        <SearchResults />
      </div>
    </Container>
  </>
);

export default Search;
