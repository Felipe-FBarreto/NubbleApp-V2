import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">Projeto Nubble</Text>
          <Text preset="headingMedium">Projeto Nubble</Text>
          <Text preset="paragraphLarge" semiBold>
            Projeto Nubble
          </Text>
          <Button title="Entrar" />
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
