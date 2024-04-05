import {Box, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

type Props = Pick<Post, 'commentCount' | 'text' | 'author' | 'id'>;

export function PostBottom({author, commentCount, text, id}: Props) {
  const navigate = useNavigation();
  function navigateToPostComments() {
    navigate.navigate('postCommentsScreen', {
      postId: id,
    });
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium">{text}</Text>
      <TouchableOpacityBox mt="s8">
        {commentCount > 0 && (
          <Text
            onPress={navigateToPostComments}
            preset="paragraphSmall"
            semiBold>
            ver {commentCount} {commentCount > 1 ? 'comentários' : 'comentário'}
          </Text>
        )}
      </TouchableOpacityBox>
    </Box>
  );
}
