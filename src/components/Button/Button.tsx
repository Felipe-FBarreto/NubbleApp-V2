import React from 'react';
import {Text} from '../Text/Text';
import {
  TouchableOpacityBox,
  TouchableOpacityPropsBox,
  ActivityIndicator,
} from '@components';
import {ButtonPreset, ButtonPresets} from './ButtonPresets';

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
  // eslint-disable-next-line @typescript-eslint/no-shadow
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
