import React from 'react';
import {Screen} from '../../../Screen/Screen';
import {Button} from '../../../Button/Button';
import {Text} from '../../../Text/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../routes/Router';
import {navigateResetSucessScreen} from '../../../../hooks/navigateResetSucessScreen';
import {FormTextInput} from '../../../Form/FormTextInput';
import {useForm} from 'react-hook-form';
import {FormPasswordInput} from '../../../Form/FormPasswordInput';
import {SingUpSchema, singUpSchema} from './singUpSchema';
import {zodResolver} from '@hookform/resolvers/zod';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SingUpScreen({navigation}: ScreenProps) {
  const {reset} = navigateResetSucessScreen();
  const {control, formState, handleSubmit} = useForm<SingUpSchema>({
    resolver: zodResolver(singUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm(FormValue: SingUpSchema) {
    console.log(FormValue);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
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
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
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
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar minha conta"
      />
    </Screen>
  );
}
