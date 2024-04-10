import React, {ReactElement, useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Box, SRTBoxProps} from '@components';
import {useAppTheme} from '@hooks';

export type TextInputProps = {
  label: string;
  erroMessage?: string;
  rightComponent?: ReactElement;
  boxProps?: SRTBoxProps;
} & RNTextInputProps;
export function TextInput({
  label,
  erroMessage,
  rightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const {colors} = useAppTheme();

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const $textInputContainer: SRTBoxProps = {
    flexDirection: 'row',
    borderColor: erroMessage ? 'error' : 'gray4',
    borderWidth: erroMessage ? 2 : 1,
    borderRadius: 's12',
    padding: 's16',
  };
  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInputProps}
          />
          {rightComponent && (
            <Box ml="s16" justifyContent="center">
              {rightComponent}
            </Box>
          )}
        </Box>

        {erroMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {erroMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
