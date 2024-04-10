/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Box, Screen, TexteMessage} from '@components';
import {AppScreenProps} from '@routes';
import {usePostCommentsList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo} from 'react-native';
import {PostComments} from 'src/domain/PostComments/postCommentsTypes';
import {PostCommentsItem, PostCommentBottom} from './components/';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'postCommentsScreen'>) {
  const [message, setMessage] = useState('');
  const postId = route.params.postId;
  const {postList, nextPageList, hasNextPage} = usePostCommentsList(postId);

  function onPressSend() {}

  function renderItem({item}: ListRenderItemInfo<PostComments>) {
    return <PostCommentsItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1}>
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
        <TexteMessage
          value={message}
          onChangeText={setMessage}
          onPressSend={onPressSend}
        />
      </Box>
    </Screen>
  );
}
