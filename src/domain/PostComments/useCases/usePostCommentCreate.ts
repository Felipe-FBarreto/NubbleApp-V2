import {PostComments, postComentService} from '@domain';
import {MutationsOptions, useMutation} from '@infra';

export function usePostCommentCreate(
  post_id: number,
  options: MutationsOptions<PostComments>,
) {
  const {mutate, error, loading} = useMutation<{message: string}, PostComments>(
    ({message}) => postComentService.create(post_id, message),
    options,
  );

  async function createComment(message: string) {
    mutate({message});
  }

  return {
    createComment,
    error,
    loading,
  };
}
