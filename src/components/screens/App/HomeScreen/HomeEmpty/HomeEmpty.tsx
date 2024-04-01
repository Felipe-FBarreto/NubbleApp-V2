import React from 'react';
import {ActivityIndicator, Box, Button, Text} from '@components';

type Props = {
  loading: boolean;
  error: unknown;
  refetch: () => void;
};
export function HomeEmpty({error, loading, refetch}: Props) {
  let component = <Text>Não há publicações no seu feed</Text>;

  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    component = (
      <>
        <Text>Não foi possivel carregar o feed</Text>
        <Button title="Recarregar" onPress={refetch} />
      </>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
