import { useSearchParams } from 'react-router';

import { Button } from '../Button';
import { Text } from '../Text';
import { IPagination } from './types';

export const Pagination = ({
  changePage,
  prevPage,
  nextPage,
  currentPage,
  lastPage,
  size,
}: IPagination) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="flex justify-between gap-4 mt-8 mb-12">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => changePage(prevPage)}
          disabled={!prevPage}
          variant="tertiary"
        >
          Anterior
        </Button>

        <Text className="mx-4">
          Página {currentPage} de {lastPage || '1'}
        </Text>

        <Button
          onClick={() => changePage(nextPage)}
          disabled={currentPage >= nextPage}
          variant="tertiary"
        >
          Próximo
        </Button>
      </div>

      <label htmlFor="size" className="flex justify-end items-center gap-2">
        Itens por página:
        <select
          id="size"
          name="size"
          value={size}
          onChange={(e) => {
            setSearchParams({ page: '1', size: e.target.value });
          }}
          className="border border-gray-500 rounded px-2 py-1 outline-0"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
    </div>
  );
};
