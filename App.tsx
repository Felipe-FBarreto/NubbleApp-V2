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
          <Text color="backgroundContrast" preset="headingLarge">
            Projeto Nubble - CoffStack
          </Text>
          <Button disabled preset="primary" title="Entrar" mt="s16" />
          <Button disabled preset="outline" title="Outline" mt="s16" />
          <Button loading title="Loading" mt="s16" />
          <Button preset="outline" loading title="Loading" mt="s16" />
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
