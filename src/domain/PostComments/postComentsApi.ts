import {PagesAPI, PagesParams, api} from '@api';
import {PostCommentsAPI} from './postCommentsTypes';

export async function getList(
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

export const postCommentsApi = {
  getList,
};
