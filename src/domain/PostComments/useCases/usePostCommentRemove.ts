import { QueryKeys} from '@infra';
import {postComentService} from '@domain';
import { MutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postComentService.remove(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(message)
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError(options.errorMessage || 'mensagem genérica');
      }
    },
  });

  return {
    mutate: mutation.mutate,
  };
}