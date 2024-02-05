import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Box paddingHorizontal="s24">
          <Text preset="headingLarge" mb="s8">
            Olá!
          </Text>
          <Text mb="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            rightComponent={<Icon name="eyeOn" />}
            boxProps={{mb: 's8'}}
          />
          <Text preset="paragraphSmall" bold color="primary">
            Esquecci minha senha
          </Text>
          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" mt="s12" preset="outline" />
        </Box>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
