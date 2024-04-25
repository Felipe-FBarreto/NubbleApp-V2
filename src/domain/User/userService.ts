import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userType';

async function userGetById(userId: number): Promise<User> {
  const responseUser = await userApi.getUserApi(userId);

  return userAdapter.toUser(responseUser);
}

export const userService = {
  userGetById,
};
