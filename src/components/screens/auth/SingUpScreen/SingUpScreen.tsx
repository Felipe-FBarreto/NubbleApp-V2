import React from 'react';
import {
  Screen,
  Button,
  FormTextInput,
  FormPasswordInput,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';
import {navigateResetSucessScreen} from '@hooks';
import {useForm} from 'react-hook-form';
import {SingUpSchema, singUpSchema} from './singUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAuthSingUp} from '@domain'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SingUpScreen({navigation}: AuthScreenProps<'SingUpScreen'>) {
  const {reset} = navigateResetSucessScreen();
  const {isLoading,singUp} = useAuthSingUp({
    onSuccess: () => {
      reset({
        title: 'Sua conta foi criada com sucesso!',
        description: 'Agora é só fazer login na nossa plataforma',
        icon: {
          name: 'checkRound',
          color: 'success',
        },
      });
    }
  })

  const {control, formState, handleSubmit} = useForm<SingUpSchema>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName:"",
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValue: SingUpSchema) {
    singUp(formValue)
   
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <FormTextInput
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's16'}}
        control={control}
        name="username"
      />
      <FormTextInput
        control={control}
        name="firstName"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's16'}}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's16'}}
        autoCapitalize="words"
      />
      <FormTextInput
        control={control}
        placeholder="Digite seu e-mail"
        label="E-mail"
        name="email"
      />
      <FormPasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        control={control}
        name="password"
        boxProps={{mb: 's48', mt: 's16'}}
      />
      <Button
        loading={isLoading}
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
