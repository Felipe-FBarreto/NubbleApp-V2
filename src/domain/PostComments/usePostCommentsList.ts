import {usePaginatedList} from '@domain';
import {postComentService} from '@domain';
import {QueryKeys} from '@infra';

export function usePostCommentsList(postId: number) {
  function getList(page: number) {
    return postComentService.getList(postId, page);
  }

  return usePaginatedList([QueryKeys.PostCommentList], getList);
}
