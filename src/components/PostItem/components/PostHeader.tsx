import {Box, ImageAvatar, Text} from '@components';
import {Post} from '@domain';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';

type Props = Pick<Post, 'author'>;

export function PostHeader({author}: Props) {
  const navigate = useNavigation();
  function navigationToMyProfile() {
    navigate.navigate('profileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigationToMyProfile}>
      <Box flexDirection="row" mb="s16">
        <ImageAvatar imageUrl={author.profileURL} />

        <Text semiBold preset="paragraphMedium" ml="s12">
          {author.name}
        </Text>
      </Box>
    </Pressable>
  );
}
