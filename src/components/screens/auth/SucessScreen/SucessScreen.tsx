import React from 'react';
import {Screen} from '../../../Screen/Screen';
import {Icon} from '../../../Icon/Icon';
import {Text} from '../../../Text/Text';
import {Button} from '../../../Button/Button';

export function SucessScreen() {
  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" mt="s24">
        Text
      </Text>
      <Text mt="s16" preset="paragraphLarge">
        Description
      </Text>
      <Button mt="s40" title="Voltar ao início" />
    </Screen>
  );
}
