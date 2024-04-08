import React from 'react';
import {Post} from '@domain';
import {PostHeader} from './components/PostHeader';
import {Box} from '../Box/Box';
import {PostImage} from './components/PostImage';
import {PostAction} from './components/PostAction';
import {PostBottom} from './components/PostBottom';

type Props = {
  post: Post;
};

export function PostItem({post}: Props) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostAction
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}
