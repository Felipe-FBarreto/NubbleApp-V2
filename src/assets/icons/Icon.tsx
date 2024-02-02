import React from 'react';
import {EyeOnIcon} from './EyeOn/EyeOnIcon';
import {EyeOffIcon} from './EyeOff/EyeOffIcon';

interface Props {
  name: IconName;
  color?: string;
  size?: string;
}

export function Icon({name}: Props) {
  const SVGIcon = iconRegistry[name];

  return <SVGIcon />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
