import React from 'react';
import {ScrollView, View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function ScrollViewContainer({children}: Props) {
  return <ScrollView>{children}</ScrollView>;
}

export function ViewContainer({children}: Props) {
  return <View>{children}</View>;
}
