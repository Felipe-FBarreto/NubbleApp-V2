import {api} from '@api';
import {UserApi} from './userType';

const PATH = 'users';

async function getUserApi(userId: number): Promise<UserApi> {
  const response = await api.get<UserApi>(`${PATH}/${userId}`);

  return response.data;
}

export const userApi = {
  getUserApi,
};
