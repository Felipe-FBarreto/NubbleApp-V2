import { useMutation } from "@tanstack/react-query";
import { SingUpData } from "../authTypes";
import { AuthServices } from "../authService";
import { MutationsOptions } from "@infra";

export function useAuthSingUp(options?:MutationsOptions<void>){
    const mutation = useMutation<void,Error,SingUpData>({
        mutationFn: SingUpData  => AuthServices.singUp(SingUpData),
        retry:false,
        onSuccess:()=> {
            if(options?.onSuccess){
                options.onSuccess()
            }
        },
        onError: error => {
            if(options?.onError){
                options.onError(error.message)
            }
        },
    })

    function singUp(singUpData:SingUpData){
        mutation.mutate(singUpData)
    }

    return {
        isLoading:mutation.isLoading,
        singUp
    }
}