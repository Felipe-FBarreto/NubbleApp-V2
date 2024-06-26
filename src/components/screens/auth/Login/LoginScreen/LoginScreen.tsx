import React from 'react';
import {
  Text,
  Button,
  Screen,
  FormPasswordInput,
  FormTextInput,
} from '@components';

import {useForm} from 'react-hook-form';

import {Alert, Pressable} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema, LoginSchema} from './loginSchema';
import {AuthScreenProps} from '@routes';
import { useAuthSingIn } from '@domain';
import { useToastService } from '@services';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSingUpScreen() {
    navigation.navigate('SingUpScreen');
  }

  function navigationToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  const {showToast} = useToastService()

  const {isLoading,singIn} = useAuthSingIn({onError: message => showToast({message,type:'error'})})

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmitForm({email, password}: LoginSchema) {
    singIn({email,password})
  }

  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá!
      </Text>
      <Text mb="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        placeholder="Digite seu e-mail"
        label="E-mail"
        name="email"
        rules={{
          required: true,
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
      />
      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        control={control}
        name="password"
        boxProps={{mt: 's16'}}
      />
      <Pressable onPress={navigationToForgotPasswordScreen}>
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>
      </Pressable>
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmitForm)}
        title="Entrar"
        mt="s48"
      />
      <Button
        onPress={navigateToSingUpScreen}
        title="Criar uma conta"
        mt="s12"
        preset="outline"
      />
    </Screen>
  );
}
