/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';
import {usePostCommentsList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo} from 'react-native';
import {PostComments} from 'src/domain/PostComments/postCommentsTypes';
import {PostCommentsItem, PostCommentBottom} from './components/';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'postCommentsScreen'>) {
  const postId = route.params.postId;
  const {postList, nextPageList, hasNextPage} = usePostCommentsList(postId);
  function renderItem({item}: ListRenderItemInfo<PostComments>) {
    return <PostCommentsItem postComment={item} />;
  }

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <FlatList
          data={postList}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 100}}
          ListFooterComponent={
            <PostCommentBottom
              nextFetchPage={nextPageList}
              hasNextPage={hasNextPage}
            />
          }
          keyExtractor={item => item.id.toString()}
        />
      </Box>
    </Screen>
  );
}
