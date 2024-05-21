import {AuthCredentialsService} from './authCredentialsTypes';
import { useContext } from 'react';
import { AuthCredentialsContext } from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {

  const context = useContext(AuthCredentialsContext)
  if(!context){
    throw new Error('AuthCredentils should be used within a AuthCredentialsProvider')
  }
  return context
}
