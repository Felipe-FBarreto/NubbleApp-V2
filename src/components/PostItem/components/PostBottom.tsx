import {Box, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';
import React from 'react';

type Props = Pick<Post, 'commentCount' | 'text' | 'author'>;

export function PostBottom({author, commentCount, text}: Props) {
  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium">{text}</Text>
      <TouchableOpacityBox mt="s8">
        {commentCount > 0 && (
          <Text preset="paragraphSmall" semiBold>
            ver {commentCount} {commentCount > 1 ? 'comentários' : 'comentário'}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}
