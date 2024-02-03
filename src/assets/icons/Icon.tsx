import React from 'react';
import {EyeOnIcon} from './EyeOn/EyeOnIcon';
import {EyeOffIcon} from './EyeOff/EyeOffIcon';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

export type IconBase = {
  color?: string;
  size?: number;
};

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
