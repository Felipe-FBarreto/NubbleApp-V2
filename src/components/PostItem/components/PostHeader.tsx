import {Box, ImageAvatar, Text} from '@components';
import {Post} from '@domain';
import React from 'react';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" mb="s16">
      <ImageAvatar imageUrl={author.profileURL} />

      <Text semiBold preset="paragraphMedium" ml="s12">
        {author.name}
      </Text>
    </Box>
  );
}
