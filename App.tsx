import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

import {Icon} from './src/assets/icons/Icon';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Box paddingHorizontal="s24">
          <Text color="backgroundContrast" preset="headingLarge">
            Projeto Nubble - CoffStack
          </Text>

          <Icon name="eyeOff" />
          <Icon name="eyeOn" />
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
