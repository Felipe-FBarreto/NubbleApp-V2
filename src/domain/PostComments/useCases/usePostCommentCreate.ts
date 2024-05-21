import {PostComments, postComentService} from '@domain';
import {MutationsOptions, QueryKeys} from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function usePostCommentCreate(
  post_id: number,
  options: MutationsOptions<PostComments>,
) {

  const queryClient = useQueryClient()

  const {mutate, isLoading,isError} = useMutation<PostComments, unknown, {message:string}>({
    mutationFn: ({message}) => postComentService.create(post_id,message),
    onSuccess: data => { queryClient.invalidateQueries({
      queryKey: [QueryKeys.PostCommentList]
    })
    if(options.onSuccess){
      options.onSuccess(data)
    }
  },
  onError:() => {
    if(options.onError){
      options.onError(options.errorMessage || "ocorreu um erro")
    }
  }
  })


  async function createComment(message: string) {
    mutate({message})
  }

  return {
    createComment,
    isLoading,
    isError,
  };
}
