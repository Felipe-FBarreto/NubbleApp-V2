import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
// import {useTheme} from '@shopify/restyle';
// import {Theme} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityPropsBox} from '../Box/Box';

type ButtonProps = {
  title: string;
  loading?: boolean;
} & TouchableOpacityPropsBox;

export function Button({
  title,
  loading,
  ...TouchableOpacityPropsBox
}: ButtonProps) {
  // const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacityBox
      backgroundColor="primary"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...TouchableOpacityPropsBox}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color="primaryContrast" preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
