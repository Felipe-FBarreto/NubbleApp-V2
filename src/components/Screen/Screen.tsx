/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/screenContainer';
import {useNavigation} from '@react-navigation/native';
type ScreenProps = {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
};

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();

  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              flexDirection="row"
              mb="s24">
              <Icon name="arrowLeft" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
