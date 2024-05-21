import React from 'react';
import {PostComments, postComentService} from '@domain';
import {Box, ImageAvatar, Text} from '@components';
import {Alert, Pressable} from 'react-native';
import {usePostCommentRemove} from '@domain';
import {useToastService} from '@services';

type Props = {
  postId:number
  postComment: PostComments;
  userId: number;
  postAuthorId: number;
};

export function PostCommentsItem({
  postComment,
  postId,
 userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId,{
    onSuccess:() => {
      showToast({message:'Comentário deletado'})
    }
  });
  const isAllowToRemove = postComentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );
  function confirmeRemove() {
    Alert.alert('Desaja excluir comentátio?', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }
  return (
    <Pressable disabled={!isAllowToRemove} onPress={confirmeRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ImageAvatar imageUrl={postComment.author.profileURL} />
        <Box ml="s12" flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
