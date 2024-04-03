import {useState, useEffect} from 'react';
import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  async function fetchInitialData() {
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function nextPageList() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    postList,
    refresh: fetchInitialData,
    nextPageList,
  };
}
