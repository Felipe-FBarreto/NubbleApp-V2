import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  BackgroundColorProps,
  backgroundColor,
  LayoutProps,
  layout,
  BorderProps,
  border,
  SpacingProps,
  spacing,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme} from '../../theme/theme';

export const Box = createBox<Theme>();
export type SRTBoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityPropsBox = BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityPropsBox,
  Theme
>(
  [backgroundColor, layout, border, spacing, spacingShorthand],
  TouchableOpacity,
);
