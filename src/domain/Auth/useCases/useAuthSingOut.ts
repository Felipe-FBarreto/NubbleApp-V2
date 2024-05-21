import { useMutation } from "@tanstack/react-query";
import { AuthServices } from "../authService";
import { useAuthCredentials } from "@services";


export function useAuthSingOut(){
    const {remove} = useAuthCredentials()
    const mutation = useMutation<string,unknown>({
        mutationFn: AuthServices.singOut,
        retry:false,
        onSuccess: remove
    })

    return{
        isLoading:mutation.isLoading,
        singOut: () => mutation.mutate()
    }
}