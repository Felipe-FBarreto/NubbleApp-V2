import {PostAPI} from './postTypes';
import {PagesAPI, api} from '@api';

async function getList(): Promise<PagesAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PagesAPI<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
