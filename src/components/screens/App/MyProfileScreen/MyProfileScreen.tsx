import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function MyProfileScreen({}: AppTabScreenProps<'myProfile'>) {
  return (
    <Screen>
      <Text>My Profile</Text>
    </Screen>
  );
}
