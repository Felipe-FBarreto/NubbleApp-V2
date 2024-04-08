import {usePaginatedList} from '@domain';
import {postComentService} from '@domain';

export function usePostCommentsList(postId: number) {
  function getList(page: number) {
    return postComentService.getList(postId, page);
  }

  return usePaginatedList(getList);
}
