/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';

import {$shadowProps} from '@theme';

import {Box, SRTBoxProps, Icon, Text, IconProps} from '@components';
import {Toast, ToastType} from '@services';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

type Props = {
  toast: Toast;
};

export function ToastContent({toast}: Props) {
  const type: ToastType = toast.type || 'success';
  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeIcon[type]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: SRTBoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
