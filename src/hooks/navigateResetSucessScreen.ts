import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '../routes/Router';

export function navigateResetSucessScreen() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigation = useNavigation();

  function reset(params: AuthStackParamList['SucessScreen']) {
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
