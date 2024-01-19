import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">Projeto Nubble</Text>
      <Text preset="headingMedium">Projeto Nubble</Text>
      <Text preset="paragraphLarge" semiBold>
        Projeto Nubble
      </Text>
    </SafeAreaView>
  );
}

export default App;
