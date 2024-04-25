import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';
import {useState, useEffect} from 'react';

export type UsePaginatedListProps<TData> = {
  isLoading: boolean;
  isError: boolean | null;
  hasNextPage: boolean;
  list: TData[];
  refresh: () => void;
  nextPageList: () => void;
};

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
): UsePaginatedListProps<Data> {
  // const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : null,
  });

  const list = query.data?.pages.flatMap(page => page.data) || [];

  function fetchNextPageIfPossible() {
    if (query.hasNextPage) {
      query.fetchNextPage();
    }
  }

  return {
    list,
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
    nextPageList: fetchNextPageIfPossible,
    hasNextPage: !!query.hasNextPage,
  };
}
