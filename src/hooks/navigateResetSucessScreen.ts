import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../routes/Router';

export function navigateResetSucessScreen() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SucessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SucessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
