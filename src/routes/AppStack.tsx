import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {SettingsScreen} from '@screens';
import {AppTaBottomParamList, AppTabNavigator} from '@routes';
import {NavigatorScreenParams} from '@react-navigation/native';

export type AppStackScreensParams = {
  appTabBottomNavigator: NavigatorScreenParams<AppTaBottomParamList>;
  settingsScreen: undefined;
};
const Stack = createStackNavigator<AppStackScreensParams>();
export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="appTabBottomNavigator"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="appTabBottomNavigator" component={AppTabNavigator} />
      <Stack.Screen name="settingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
