import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Icon} from '../../../components/Icon/Icon';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';

export function SingUpScreen() {
  return (
    <Screen canGoBack>
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
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        rightComponent={<Icon name="eyeOn" />}
        boxProps={{mb: 's48'}}
      />
      <Button title="Criar minha conta" />
    </Screen>
  );
}
