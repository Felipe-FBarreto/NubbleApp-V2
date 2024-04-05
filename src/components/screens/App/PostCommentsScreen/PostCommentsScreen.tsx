import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';
import {usePostCommentsList} from '@domain';

export function PostCommentsScreen({
  route,
}: AppScreenProps<'postCommentsScreen'>) {
  const postId = route.params.postId;

  const {} = usePostCommentsList(postId);
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Comentários</Text>
      </Box>
    </Screen>
  );
}
