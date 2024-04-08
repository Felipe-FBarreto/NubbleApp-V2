import React from 'react';
import {PostComments} from '@domain';
import {Box, ImageAvatar, Text} from '@components';

type Props = {
  postComment: PostComments;
};

export function PostCommentsItem({postComment}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ImageAvatar imageUrl={postComment.author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message}
        </Text>
      </Box>
    </Box>
  );
}
