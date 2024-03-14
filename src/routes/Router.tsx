/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../components/screens/auth/Login/LoginScreen/LoginScreen';
import {SingUpScreen} from '../components/screens/auth/SingUpScreen/SingUpScreen';
import {SucessScreen} from '../components/screens/auth/SucessScreen/SucessScreen';
import {IconProps} from '../components/Icon/Icon';
import {ForgotPasswordScreen} from '../components/screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SingUpScreen: undefined;
  SucessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
        <Stack.Screen name="SucessScreen" component={SucessScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
