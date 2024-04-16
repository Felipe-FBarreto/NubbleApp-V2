import {PagesAPI, PagesParams, api} from '@api';
import {PostCommentsAPI} from './postCommentsTypes';

const PATH = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PagesParams,
): Promise<PagesAPI<PostCommentsAPI>> {
  const response = await api.get(PATH, {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentsAPI> {
  const response = await api.post(PATH, {post_id, message});

  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await api.delete(`${PATH}/${postCommentId}`);

  return response.data;
}

export const postCommentsApi = {
  getList,
  create,
  remove,
};
