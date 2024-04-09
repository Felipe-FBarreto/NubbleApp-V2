import {defaultUtils} from '@utils';
import {PostCommentsAPI, PostComments} from './postCommentsTypes';

function toPostComments(postCommentsApi: PostCommentsAPI): PostComments {
  return {
    id: postCommentsApi.id,
    message: postCommentsApi.message,
    createdAtRelative: defaultUtils.formatRelative(postCommentsApi.created_at),
    author: {
      name: postCommentsApi.user.full_name,
      profileURL: postCommentsApi.user.profile_url,
      userName: postCommentsApi.user.username,
    },
    createdAt: postCommentsApi.created_at,
  };
}

export const postCommentsAdapter = {
  toPostComments,
};
