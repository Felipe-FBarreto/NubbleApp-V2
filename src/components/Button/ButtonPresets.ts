import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityPropsBox} from '../Box/Box';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
  container: TouchableOpacityPropsBox;
  content: ThemeColors;
}

export const ButtonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
};
