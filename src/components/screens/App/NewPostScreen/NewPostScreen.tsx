import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function NewPostScreen({}: AppTabScreenProps<'newPostScreen'>) {
  return (
    <Screen>
      <Text>New Post</Text>
    </Screen>
  );
}
