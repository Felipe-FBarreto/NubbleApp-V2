import React from 'react';
import {Text} from '../../../../Text/Text';
import {Button} from '../../../../Button/Button';
import {TextInput} from '../../../../TextInput/TextInput';
import {Screen} from '../../../../Screen/Screen';
import {PasswordInput} from '../../../../PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../../routes/Router';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSingUpScreen() {
    navigation.navigate('SingUpScreen');
  }
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Text preset="paragraphSmall" bold color="primary">
        Esquecci minha senha
      </Text>
      <Button title="Entrar" mt="s48" />
      <Button
        onPress={navigateToSingUpScreen}
        title="Criar uma conta"
        mt="s12"
        preset="outline"
      />
    </Screen>
  );
}
