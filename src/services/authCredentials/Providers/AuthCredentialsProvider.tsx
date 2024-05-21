import { createContext, useEffect, useState } from "react";
import { AuthCredentialsService } from "../authCredentialsTypes";
import { AuthCredentials, AuthServices } from "@domain";
import { authCredentialsStorage } from "../authCredentialsStorage";




export const AuthCredentialsContext = createContext<AuthCredentialsService>({
    authCredentials:null,
    isLoading:true,
    saveCredentials: async () => {},
    remove: async () =>{}
})

export function AuthCredentialsProvider ({children}:React.PropsWithChildren<{}>){

    const [authCredentials,setAuthCredentials] = useState<AuthCredentials | null>(null)
    const [isLoading,setIsLoading] = useState<boolean>(true)

    useEffect(() =>{
        startAuthCredentials()
    }, [])

    async function startAuthCredentials(){
        try {
            const ac = await authCredentialsStorage.get()
            if(ac){
                 AuthServices.updateToken(ac.token)
                 setAuthCredentials(ac)
            }
        } catch (error) {
            
        }finally{
            setIsLoading(false)
        }
    }

    async function saveCredentials (ac:AuthCredentials):Promise<void>{
        AuthServices.updateToken(ac.token)
        authCredentialsStorage.set(ac)
        setAuthCredentials(ac)
    }
    async function remove ():Promise<void>{
        AuthServices.removeToken()
        authCredentialsStorage.remove()
        setAuthCredentials(null)
    }
    

    return(
        <AuthCredentialsContext.Provider value={{authCredentials,isLoading,remove,saveCredentials}}>
            {children}
        </AuthCredentialsContext.Provider>
    )
} 
