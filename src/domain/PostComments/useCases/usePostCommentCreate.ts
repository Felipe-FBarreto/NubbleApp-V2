import {useState} from 'react';
import {postComentService} from '../postCommentsService';
import {PostComments} from '../postCommentsTypes';

interface Options {
  onSuccess?: (data: PostComments) => void;
}

export function usePostCommentCreate(post_id: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      const postComment = await postComentService.create(post_id, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    createComment,
  };
}
