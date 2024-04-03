export type MetaDataPage = {
  total: number;
  perPage: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  lastPage: number;
  firstPage: number;
};

export type Page<Data> = {
  meta: MetaDataPage;
  data: Data[];
};
