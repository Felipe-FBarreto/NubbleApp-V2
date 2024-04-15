import {$textInputStyle, Box, SRTBoxProps, Text} from '@components';
import {useAppTheme} from '@hooks';
import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';

type Props = {onPressSend: (message: string) => void} & TextInputProps;

export function TexteMessage({value, onPressSend, ...rnTextInputProps}: Props) {
  const inputRef = useRef<RNTextInput>(null);

  const {colors} = useAppTheme();

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPressIn={focusInput}>
      <Box {...$textStyle}>
        <RNTextInput
          autoCapitalize="none"
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          value={value}
          style={$textInputStyle}
          {...rnTextInputProps}
        />
        <Pressable
          disabled={sendIsDisabled}
          onPress={() => onPressSend(value || '')}>
          <Text bold color={sendIsDisabled ? 'gray2' : 'primary'}>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}

const $textStyle: SRTBoxProps = {
  backgroundColor: 'gray4',
  paddingHorizontal: 's16',
  paddingVertical: 's14',
  borderRadius: 's12',
  flexDirection: 'row',
  alignItems: 'center',
};
