import { Container } from '@/components';
import { Page } from '@/layouts/Page';

import { SearchForm } from './searchForm';
import { SearchResults } from './searchResults';

const Search = () => (
  <Page>
    <Container>
      <div className="grid grid-cols-[3fr_9fr] gap-8 mt-12 mb-20">
        <SearchForm />
        <SearchResults />
      </div>
    </Container>
  </Page>
);

export default Search;
