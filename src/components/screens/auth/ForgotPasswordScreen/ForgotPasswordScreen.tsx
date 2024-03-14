import React from 'react';
import {Screen} from '../../../Screen/Screen';
import {Text} from '../../../Text/Text';
import {TextInput} from '../../../TextInput/TextInput';
import {Button} from '../../../Button/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../routes/Router';
import {navigateResetSucessScreen} from '../../../../hooks/navigateResetSucessScreen';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = navigateResetSucessScreen();

  function navigateToSucessScreen() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
    // navigation.navigate('SucessScreen', {
    //   title: 'Enviamos as instruções para seu e-mail',
    //   description:
    //     'Clique no link enviado no seu e-mail para recuperar sua senha',
    //   icon: {
    //     name: 'messageRound',
    //     color: 'primary',
    //   },
    // });
  }
  return (
    <Screen canGoBack>
      <Text mt="s24" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        boxProps={{mt: 's32'}}
        label="E-mail"
        placeholder="Digite seu-email"
      />
      <Button
        onPress={navigateToSucessScreen}
        mt="s40"
        title="Recuperar senha"
      />
    </Screen>
  );
}
