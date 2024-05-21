import { api } from "@api";
import { authAdapter } from "./authAdapter";
import { authApi } from "./authApi";
import { AuthCredentials, SingUpData, SingUpDataAPI } from "./authTypes";




async function singIn(email:string, password:string):Promise<AuthCredentials>{

    try{
        const authCredentialsAPI = await authApi.singIn(email,password)
        return authAdapter.toAuthCredentials(authCredentialsAPI)
    }catch(error){
        throw new Error('Email ou senha inválidos')
    }
}

async function singUp(data:SingUpData):Promise<void>{
     authApi.singUp(data)
}

async function singOut():Promise<string>{
    const message = await authApi.singOut()
    return message
}


function updateToken(token:string){
     api.defaults.headers.common.Authorization = `Bearer ${token}`
}

function removeToken(){
    api.defaults.headers.common.Authorization = null
}


export const AuthServices = {
    singIn,
    singOut,
    singUp,
    updateToken,
    removeToken
}