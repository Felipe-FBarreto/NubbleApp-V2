import {Screen, Text} from '@components';
import React from 'react';
import {AppScreenProps} from 'src/routes/navigateType';

export function SettingsScreen({}: AppScreenProps<'settingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
