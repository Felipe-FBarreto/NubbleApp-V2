import {IconProps} from './../components/Icon/Icon';
import {AppTaBottomParamList} from './AppTabNavigator';
export const mapScreenToProps: Record<
  keyof AppTaBottomParamList,
  {
    label: string;
    icon: {
      focused: IconProps['name'];
      unFocused: IconProps['name'];
    };
  }
> = {
  homeScreen: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unFocused: 'home',
    },
  },
  newPostScreen: {
    label: 'Novo Post',
    icon: {
      focused: 'newPost',
      unFocused: 'newPost',
    },
  },
  favoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unFocused: 'bookmark',
    },
  },
  myProfile: {
    label: 'Perfil',
    icon: {
      focused: 'profileFill',
      unFocused: 'profile',
    },
  },
};
