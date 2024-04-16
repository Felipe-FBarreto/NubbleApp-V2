import {Page} from '@types';
import {PostComments} from './postCommentsTypes';
import {postCommentsApi} from './postComentsApi';
import {postCommentsAdapter} from './postCommentsAdpter';
import {apiAdapter} from '@api';

const PER_PAGE = 5;

async function getList(
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

async function create(post_id: number, message: string): Promise<PostComments> {
  const postCommentMessageApi = await postCommentsApi.create(post_id, message);

  return postCommentsAdapter.toPostComments(postCommentMessageApi);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentsApi.remove(postCommentId);
  return response.message;
}

function isAllowToDelete(
  postComment: PostComments,
  user_id: number,
  postAuthorId: number,
): boolean {
  console.log('🚀 ~ user_id:', user_id);
  console.log('🚀 ~ postComment.author.id:', postComment.author.id);
  console.log('🚀 ~ postAuthorId:', postAuthorId);

  if (postComment.author.id === user_id) {
    return true;
  }

  if (postAuthorId === user_id) {
    return true;
  }

  return false;
}

export const postComentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
