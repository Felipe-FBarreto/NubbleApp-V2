import React from 'react';

import {useUserGetById} from '@domain';

import {ActivityIndicator, Box, ImageAvatar, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import {RefreshControl, ScrollView} from 'react-native';

export function ProfileScreen({route}: AppScreenProps<'profileScreen'>) {
  const userId = route.params.userId;

  const {isLoading, isError, user, refetch, isFetching} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
          <Box alignItems="center">
            <ImageAvatar
              imageUrl={user.profileUrl}
              size={64}
              borderRadius={24}
            />
            <Text preset="headingMedium" bold>
              {user.fullName}
            </Text>
            <Text>@{user.username}</Text>
          </Box>
        </ScrollView>
      )}
    </Screen>
  );
}
