import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';
import React from 'react';

export function FavoriteScreen({}: AppTabScreenProps<'favoriteScreen'>) {
  return (
    <Screen>
      <Text> Favorites </Text>
    </Screen>
  );
}
