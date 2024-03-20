import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SettingsScreen} from '@screens';

export type AppStackScreensParams = {
  homeScreen: undefined;
  settingsScreen: undefined;
};
const Stack = createStackNavigator<AppStackScreensParams>();
export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="homeScreen" component={HomeScreen} />
      <Stack.Screen name="settingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
