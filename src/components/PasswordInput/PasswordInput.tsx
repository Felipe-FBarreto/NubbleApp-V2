import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type IPasswordProps = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: IPasswordProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setIsSecureTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      rightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
        />
      }
      {...props}
    />
  );
}
