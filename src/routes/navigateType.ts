import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackScreensParams, AuthStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackScreensParams {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackScreensParams> =
  NativeStackScreenProps<AppStackScreensParams, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;
