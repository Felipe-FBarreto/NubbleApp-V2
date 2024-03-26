import {Screen} from '@components';
import React, {useEffect, useState} from 'react';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import {PostItem} from '@components';
import {HomeHeader} from './HomeHeader/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'homeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };

  return (
    <Screen style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeader />}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingBottom: 0,
  paddingHorizontal: 0,
  paddingTop: 0,
};
