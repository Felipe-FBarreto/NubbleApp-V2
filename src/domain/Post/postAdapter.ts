import {Post, PostAPI} from './postTypes';

function toPost(postApi: PostAPI): Post {
  return {
    id: postApi.id.toString(),
    text: postApi.text,
    author: {
      name: postApi.user.full_name,
      profileURL: postApi.user.profile_url,
      userName: postApi.user.username,
      id: postApi.user.id,
    },
    imageURL: postApi.image_url,
    commentCount: parseInt(postApi.meta.comments_count, 10),
    favoriteCount: parseInt(postApi.meta.favorite_count, 10),
    reactionCount: parseInt(postApi.meta.like_count, 10),
  };
}

export const postAdapter = {
  toPost,
};
