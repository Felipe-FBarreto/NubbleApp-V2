import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {Theme, ThemeColors} from '@theme';
import {useTheme} from '@shopify/restyle';

type Props = Omit<ActivityIndicatorProps, 'color'> & {
  color: ThemeColors;
};
export const ActivityIndicator = ({color}: Props) => {
  const {colors} = useTheme<Theme>();
  return <RNActivityIndicator color={colors[color]} />;
};
