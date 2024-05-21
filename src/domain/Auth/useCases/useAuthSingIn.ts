import { MutationsOptions } from "@infra"
import { AuthCredentials } from "../authTypes"
import { useMutation } from "@tanstack/react-query"
import { AuthServices } from "../authService"
import { useAuthCredentials } from "@services"


type Variables = {
    email:string
    password:string

}

export function useAuthSingIn (options?:MutationsOptions<AuthCredentials>){
const {saveCredentials} = useAuthCredentials()
    const mutation = useMutation<AuthCredentials,Error,Variables>({
        mutationFn: ({email,password}) => AuthServices.singIn(email,password),
        retry: false,
        onError: error => {
            if(options?.onError){
                options.onError(error.message)
            }
        },
        onSuccess: (authCredentials) =>{
            // AuthServices.updateToken(authCredentials.token)
            saveCredentials(authCredentials)
        }
    })


    return{
        isLoading:mutation.isLoading,
        singIn:(variables: Variables) => mutation.mutate(variables),
    }

}