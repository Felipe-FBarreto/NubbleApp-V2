import {TexteMessage} from '@components';
import React, {useState} from 'react';
import {usePostCommentCreate} from '@domain';
import {Keyboard} from 'react-native';

type Props = {
  postId: number;
 
};

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  return (
    <TexteMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
    />
  );
}
