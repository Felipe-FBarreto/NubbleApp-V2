import {Page} from '@types';
import {PostComments} from './postCommentsTypes';
import {postCommentsApi} from './postComentsApi';
import {postCommentsAdapter} from './postCommentsAdpter';
import {apiAdapter} from '@api';

const PER_PAGE = 5;

export async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComments>> {
  const postCommentsPageApi = await postCommentsApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentsPageApi.data.map(postCommentsAdapter.toPostComments),
    meta: apiAdapter.toMetaDataPage(postCommentsPageApi.meta),
  };
}

export const postComentService = {
  getList,
};
