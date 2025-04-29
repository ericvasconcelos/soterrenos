export interface IPagination {
  changePage: (page: number) => void;
  prevPage: number;
  nextPage: number;
  currentPage: number;
  lastPage: number;
  size: number;
}
