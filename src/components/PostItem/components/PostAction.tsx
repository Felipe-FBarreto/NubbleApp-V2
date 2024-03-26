import {Box, Icon, IconProps, Text} from '@components';
import {Post} from '@domain';
import React from 'react';

type Props = Pick<Post, 'commentCount' | 'reactionCount' | 'favoriteCount'>;

export function PostAction({
  commentCount,
  favoriteCount,
  reactionCount,
}: Props) {
  return (
    <Box mt="s16" flexDirection="row">
      <Item
        marked
        text={reactionCount}
        icon={{defaut: 'heart', marked: 'heartFill'}}
      />
      <Item
        marked={false}
        text={commentCount}
        icon={{defaut: 'comment', marked: 'comment'}}
      />
      <Item
        marked
        text={favoriteCount}
        icon={{defaut: 'bookmark', marked: 'bookmarkFill'}}
      />
    </Box>
  );
}

type ItemProps = {
  text: number;
  icon: {
    defaut: IconProps['name'];
    marked: IconProps['name'];
  };
  marked: boolean;
};

function Item({icon, text, marked}: ItemProps) {
  return (
    <Box mr="s24" flexDirection="row" alignItems="center">
      <Icon
        color={marked ? 'marked' : undefined}
        name={marked ? icon.marked : icon.defaut}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </Box>
  );
}
