import React from 'react';
import {Screen, Icon, Text, Button} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SucessScreen'>;

export function SucessScreen({route, navigation}: ScreenProps) {
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
