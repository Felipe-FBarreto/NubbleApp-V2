import React from 'react';
import {Button, Screen} from '@components';
import {useNavigation} from '@react-navigation/native';

export function MyProfileScreen() {
  const navigation = useNavigation();

  function navigationToSettings() {
    navigation.navigate('settingsScreen');
  }
  return (
    <Screen>
      <Button title="Settings" onPress={navigationToSettings} />
    </Screen>
  );
}
