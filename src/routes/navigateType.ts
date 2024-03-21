import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  AppStackScreensParams,
  AppTaBottomParamList,
  AuthStackParamList,
} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackScreensParams {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackScreensParams> =
  NativeStackScreenProps<AppStackScreensParams, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof AppTaBottomParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTaBottomParamList, RouteName>,
    NativeStackScreenProps<AppStackScreensParams, 'appTabBottomNavigator'>
  >;
