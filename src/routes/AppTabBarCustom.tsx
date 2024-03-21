import React from 'react';
import {Box, Icon, Text, TouchableOpacityBox} from '@components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {mapScreenToProps} from './mapScreenToProps';
import {AppTaBottomParamList} from './AppTabNavigator';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

export function AppTabBarCustom({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box
      paddingTop="s12"
      flexDirection="row"
      style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const tabItemName =
          mapScreenToProps[route.name as keyof AppTaBottomParamList];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={index}
            alignItems="center"
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              name={
                isFocused
                  ? tabItemName.icon.focused
                  : tabItemName.icon.unFocused
              }
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              preset="paragraphCaption"
              semiBold>
              {tabItemName.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
