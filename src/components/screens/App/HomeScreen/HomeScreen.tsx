import {Button, Screen, Text} from '@components';
import React from 'react';
import {AppScreenProps} from 'src/routes/navigateType';

export function HomeScreen({navigation}: AppScreenProps<'homeScreen'>) {
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
