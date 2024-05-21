/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Box, Screen, PostCommentTextMessage} from '@components';
import {AppScreenProps} from '@routes';
import {usePostCommentsList, userId} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo} from 'react-native';
import {PostComments} from 'src/domain/PostComments/postCommentsTypes';
import {PostCommentsItem, PostCommentBottom} from './components/';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'postCommentsScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const {list, nextPageList, hasNextPage} =
    usePostCommentsList(postId);
  const {id} = userId();
  function renderItem({item}: ListRenderItemInfo<PostComments>) {
    return (
      <PostCommentsItem
        postId={postId}
        postComment={item}
        userId={id}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1}>
        <FlatList
          data={list}
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
        <PostCommentTextMessage postId={postId}/>
      </Box>
    </Screen>
  );
}
