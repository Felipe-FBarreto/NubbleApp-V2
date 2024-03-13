/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/Login/LoginScreen/LoginScreen';
import {SingUpScreen} from '../screens/auth/SingUpScreen/SingUpScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  SingUpScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
