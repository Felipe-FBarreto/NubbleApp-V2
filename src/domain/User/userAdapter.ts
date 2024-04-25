import {User, UserApi} from './userType';

function toUser(userApi: UserApi): User {
  return {
    id: userApi.id,
    firstName: userApi.first_name,
    fullName: userApi.full_name,
    email: userApi.email,
    isOnline: userApi.is_online,
    lastName: userApi.last_name,
    profileUrl: userApi.profile_url,
    username: userApi.username,
  };
}

export const userAdapter = {
  toUser,
};
