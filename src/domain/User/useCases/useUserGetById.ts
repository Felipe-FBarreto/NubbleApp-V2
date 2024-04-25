// import {useCallback, useEffect, useState} from 'react';
// import {User} from '../userType';
import {userService} from '../userService';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@infra';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.userGetById(id),
    staleTime: 1000 * 30,
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}
