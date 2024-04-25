import {postService, usePaginatedList} from '@domain';
import {QueryKeys} from '@infra';

export function usePostList() {
  return usePaginatedList([QueryKeys.PostList], postService.getList);
}
