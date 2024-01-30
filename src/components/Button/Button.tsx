import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Text} from '../Text/Text';
// import {useTheme} from '@shopify/restyle';
// import {Theme} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityPropsBox} from '../Box/Box';
import {ButtonPreset, ButtonPresets} from './ButtonPresets';

type ButtonProps = {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
} & TouchableOpacityPropsBox;

export function Button({
  title,
  loading,
  preset = 'primary',
  ...TouchableOpacityPropsBox
}: ButtonProps) {
  const buttonPreset = ButtonPresets[preset];
  // const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacityBox
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...TouchableOpacityPropsBox}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color={buttonPreset.content} preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
