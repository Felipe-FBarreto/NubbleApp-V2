/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function ScrollViewContainer({children}: Props) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children}: Props) {
  return <View style={{flex: 1}}>{children}</View>;
}
