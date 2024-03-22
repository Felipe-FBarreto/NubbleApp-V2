import {Box, Text} from '@components';
import {Post} from '@domain';
import React from 'react';
import {Image} from 'react-native';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  return (
    <Box flexDirection="row" mb="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{borderRadius: 14, width: 32, height: 32}}
      />
      <Text semiBold preset="paragraphMedium" ml="s12">
        {author.name}
      </Text>
    </Box>
  );
}
