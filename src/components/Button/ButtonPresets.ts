import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityPropsBox} from '../Box/Box';

export type ButtonPreset = 'primary' | 'outline';

interface ButtonUI {
  container: TouchableOpacityPropsBox;
  content: ThemeColors;
}

export const ButtonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray2',
      },
      content: 'gray2',
    },
  },
};
