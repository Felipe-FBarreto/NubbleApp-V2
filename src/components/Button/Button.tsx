import React from 'react';
import {Text} from '../Text/Text';
// import {useTheme} from '@shopify/restyle';
// import {Theme} from '../../theme/theme';
import {TouchableOpacityBox, TouchableOpacityPropsBox} from '../Box/Box';
import {ButtonPreset, ButtonPresets} from './ButtonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

type ButtonProps = {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
} & TouchableOpacityPropsBox;

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...TouchableOpacityPropsBox
}: ButtonProps) {
  const buttonPreset = ButtonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...TouchableOpacityPropsBox}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text color={buttonPreset.content} preset="paragraphMedium" bold>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
