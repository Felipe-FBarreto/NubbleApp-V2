import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  FavoriteScreen,
  HomeScreen,
  NewPostScreen,
  MyProfileScreen,
} from '@screens';
import {AppTabBarCustom} from './AppTabBarCustom';

export type AppTaBottomParamList = {
  homeScreen: undefined;
  newPostScreen: undefined;
  favoriteScreen: undefined;
  myProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTaBottomParamList>();

const renderTabBar = (props: BottomTabBarProps) => {
  return <AppTabBarCustom {...props} />;
};

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="homeScreen" component={HomeScreen} />
      <Tab.Screen name="newPostScreen" component={NewPostScreen} />
      <Tab.Screen name="favoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="myProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
