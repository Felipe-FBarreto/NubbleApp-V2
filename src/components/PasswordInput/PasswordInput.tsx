import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type Props = Omit<TextInputProps, 'rightComponent'>;

export function PasswordInput(props: Props) {
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
