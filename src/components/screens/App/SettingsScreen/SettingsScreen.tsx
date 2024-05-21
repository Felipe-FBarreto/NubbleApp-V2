import {Button, Screen, Text} from '@components';
import { useAuthSingOut } from '@domain';
import React from 'react';
import {AppScreenProps} from 'src/routes/navigateType';

export function SettingsScreen({}: AppScreenProps<'settingsScreen'>) {
  const {isLoading,singOut} = useAuthSingOut()
  return (
    <Screen canGoBack title='Configurações'>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button loading={isLoading} title='Sair da conta' onPress={()=> singOut()}/>
    </Screen>
  );
}
