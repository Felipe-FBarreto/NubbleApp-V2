import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/routes/Router';
import {Toast} from '@components';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { AuthCredentialsProvider ,MMKVStorage,initializeStorage} from '@services';

initializeStorage(MMKVStorage)

const client = new QueryClient();

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={client}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
              <Router />
              <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
