import {Page} from '@types';
import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';
import {apiAdapter} from '@api';

async function getList(page: number): Promise<Page<Post>> {
  const postPagesAPI = await postApi.getList({page, per_page: 5});

  return {
    data: postPagesAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPagesAPI.meta),
  };
}

export const postService = {
  getList,
};
