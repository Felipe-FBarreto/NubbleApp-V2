import {Button, Screen, Text} from '@components';
import React from 'react';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'homeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('settingsScreen')}
        preset="primary"
        title="Settings"
      />
    </Screen>
  );
}
