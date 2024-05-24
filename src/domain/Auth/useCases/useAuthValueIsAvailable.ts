import { useQuery } from "@tanstack/react-query"
import { AuthServices } from "../authService"
import { QueryKeys } from "@infra"


type Param = {
    username:string
}

export function useAuthIsUsernameValueAvailable({username}:Param){

        const {data,isFetched} = useQuery({
            queryKey:[QueryKeys.IsUserNameAvailable,username],
            queryFn: () => AuthServices.isUserNameAvailable(username),
        })

        return{
            isAvailable: !!data,
            isFetched
        }

}