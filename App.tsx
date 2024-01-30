import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Box paddingHorizontal="s24">
          <Text preset="headingLarge">Projeto Nubble - CoffStack</Text>
          <Box pt="s16">
            <Button backgroundColor="error" title="Entrar" />
          </Box>
          <Box pt="s16">
            <Button loading title="Loading" />
          </Box>
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
