import React from 'react';
import {Text} from '../../../../components/Text/Text';
import {Button} from '../../../../components/Button/Button';
import {TextInput} from '../../../../components/TextInput/TextInput';
import {Screen} from '../../../../components/Screen/Screen';
import {PasswordInput} from '../../../../components/PasswordInput/PasswordInput';

export function LoginScreen({navigation}) {
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
