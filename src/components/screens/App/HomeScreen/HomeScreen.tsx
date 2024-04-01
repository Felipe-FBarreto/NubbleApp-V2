import {Screen} from '@components';
import React, {useEffect, useState} from 'react';
import {AppTabScreenProps} from '@routes';
import {Post, postService} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import {PostItem} from '@components';
import {HomeHeader} from './HomeHeader/HomeHeader';
import {HomeEmpty} from './HomeEmpty/HomeEmpty';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'homeScreen'>) {
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Post>) => {
    return <PostItem post={item} />;
  };

  return (
    <Screen flex={1} style={$screen}>
      <FlatList
        data={postList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty error={error} loading={loading} refetch={fetchData} />
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
