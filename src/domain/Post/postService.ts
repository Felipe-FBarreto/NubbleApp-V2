import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postPagesAPI = await postApi.getList();
  return postPagesAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
