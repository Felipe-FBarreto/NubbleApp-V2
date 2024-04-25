/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Screen} from '@components';
import {AppTabScreenProps} from '@routes';
import {Post, usePostList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {PostItem} from '@components';
import {HomeHeader} from './HomeHeader/HomeHeader';
import {HomeEmpty} from './HomeEmpty/HomeEmpty';
import {useScrollToTop} from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'homeScreen'>) {
  const {isError, isLoading, list, refresh, nextPageList} = usePostList();
  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };
  const flastListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flastListRef);
  return (
    <Screen flex={1} style={$screen}>
      <FlatList
        ref={flastListRef}
        data={list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: list.length === 0 ? 1 : undefined}}
        refreshing={isLoading}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        ListHeaderComponent={<HomeHeader />}
        onEndReached={nextPageList}
        onEndReachedThreshold={0.3}
        ListEmptyComponent={
          <HomeEmpty error={isError} loading={isLoading} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
