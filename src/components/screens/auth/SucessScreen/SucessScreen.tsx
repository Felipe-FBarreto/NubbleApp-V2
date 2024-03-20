import React from 'react';
import {Screen, Icon, Text, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SucessScreen({
  route,
  navigation,
}: AuthScreenProps<'SucessScreen'>) {
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
