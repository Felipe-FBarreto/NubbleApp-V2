import {PostAPI} from './postTypes';
import {PagesAPI, PagesParams, api} from '@api';

async function getList(params?: PagesParams): Promise<PagesAPI<PostAPI>> {
  const response = await api.get<PagesAPI<PostAPI>>('user/post', {params});
  return response.data;
}

export const postApi = {
  getList,
};
