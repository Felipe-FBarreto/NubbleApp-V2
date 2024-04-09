import React from 'react';
import {Text} from '@components';
import {Pressable} from 'react-native';

type Props = {
  nextFetchPage: () => void;
  hasNextPage: boolean;
};

export function PostCommentBottom({nextFetchPage, hasNextPage}: Props) {
  if (!hasNextPage) {
    return null;
  }
  return (
    <Pressable onPress={nextFetchPage}>
      <Text textAlign="center" preset="paragraphSmall" bold color="primary">
        Ver mais
      </Text>
    </Pressable>
  );
}
