import React from 'react';
import {Screen} from '../../../Screen/Screen';
import {TextInput} from '../../../TextInput/TextInput';
import {Button} from '../../../Button/Button';
import {Text} from '../../../Text/Text';
import {PasswordInput} from '../../../PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../routes/Router';
import {navigateResetSucessScreen} from '../../../../hooks/navigateResetSucessScreen';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SingUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SingUpScreen({navigation}: ScreenProps) {
  const {reset} = navigateResetSucessScreen();

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
    // navigation.navigate('SucessScreen', {
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's16'}} />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's16'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button onPress={submitForm} title="Criar minha conta" />
    </Screen>
  );
}
