import {MutationsOptions, useMutation} from '@infra';
import {postComentService} from '@domain';

export function usePostCommentRemove(option?: MutationsOptions<string>) {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postComentService.remove(postCommentId),
    option,
  );
}
