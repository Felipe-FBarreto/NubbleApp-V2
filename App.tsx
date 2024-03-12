import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {LoginScreen} from './src/screens/auth/Login/LoginScreen/LoginScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SingUpScreen} from './src/screens/auth/SingUpScreen/SingUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <LoginScreen />
        {/* <SingUpScreen /> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
