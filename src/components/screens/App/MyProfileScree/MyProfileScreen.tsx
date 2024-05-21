import React from 'react';
import {Box, Button, Icon, Screen, Text} from '@components';
import { useAuthCredentials } from '@services';
import { AppTabScreenProps } from '@routes';

export function MyProfileScreen({navigation}:AppTabScreenProps<'myProfileScreen'>) {
  const {authCredentials} = useAuthCredentials()
  const name = authCredentials?.user.fullName
  function navigationToSettings() {
    navigation.navigate('settingsScreen');
  }

  return (
    <Screen>
      <Box flexDirection='row' justifyContent='space-between' alignItems='center'>
        {name && <Text preset='headingMedium'>{name}</Text>}
        <Icon name='settings' onPress={() => navigation.navigate('settingsScreen')}/>
      </Box>
    </Screen>
  );
}
