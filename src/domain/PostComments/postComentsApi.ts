import {PagesAPI, PagesParams, api} from '@api';
import {PostCommentsAPI} from './postCommentsTypes';

async function getList(
  post_id: number,
  pageParams?: PagesParams,
): Promise<PagesAPI<PostCommentsAPI>> {
  const response = await api.get('user/post_comment', {
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
  const response = await api.post('user/post_comment', {post_id, message});

  return response.data;
}

export const postCommentsApi = {
  getList,
  create,
};
