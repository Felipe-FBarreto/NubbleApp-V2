import React from 'react';
import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';
import {useNavigation} from '@react-navigation/native';

type Props = Pick<ScreenProps, 'canGoBack' | 'title'>;

export function ScreenHeader({canGoBack, title}: Props) {
  const navigation = useNavigation();

  const ICON_SIZE = 20;
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24">
      {canGoBack && (
        <TouchableOpacityBox onPress={navigation.goBack} flexDirection="row">
          <Icon size={ICON_SIZE} name="arrowLeft" />
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {title && (
        <Text preset="headingSmall" semiBold>
          {title}
        </Text>
      )}
      <Box width={ICON_SIZE} />
    </Box>
  );
}
