import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Router} from './src/routes/Router';
import {Toast} from '@components';
import {ToastProvider} from '@services';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
