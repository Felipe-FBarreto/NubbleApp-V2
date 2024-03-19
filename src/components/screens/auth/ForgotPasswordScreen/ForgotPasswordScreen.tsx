import React from 'react';
import {Screen, Text, Button, FormTextInput} from '@components';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';
import {navigateResetSucessScreen} from '@hooks';
import {ForgotPassword, forgotPassword} from './forgotSchema';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({navigation}: ScreenProps) {
  const {reset} = navigateResetSucessScreen();

  const {control, formState, handleSubmit} = useForm<ForgotPassword>({
    resolver: zodResolver(forgotPassword),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  function navigateToSucessScreen(FormValue: ForgotPassword) {
    console.log('🚀 ~ navigateToSucessScreen ~ FormValue:', FormValue);
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text mt="s24" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        label="E-mail"
        placeholder="Digite seu e-mail"
        name="email"
        boxProps={{mt: 's16'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(navigateToSucessScreen)}
        mt="s40"
        title="Recuperar senha"
      />
    </Screen>
  );
}
