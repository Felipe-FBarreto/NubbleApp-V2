import React from 'react';
import {Post} from '@domain';
import {PostHeader} from './components/PostHeader';
import {Box} from '../Box/Box';
import {PostImage} from './components/PostImage';

type Props = {
  post: Post;
};

export function PostItem({post}: Props) {
  return (
    <Box mb="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
