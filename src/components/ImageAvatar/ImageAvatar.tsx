import React from 'react';
import {Image} from 'react-native';

type Props = {
  imageUrl: string;
  /**
   @default 32
   */
  size?: number;
  /**
   @default 14
   */
  borderRadius?: number;
};
export function ImageAvatar({imageUrl, borderRadius = 14, size = 32}: Props) {
  return (
    <Image
      source={{uri: imageUrl}}
      style={{borderRadius, width: size, height: size}}
    />
  );
}
