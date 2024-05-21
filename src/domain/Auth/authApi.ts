import { api } from "@api";
import { AuthCredentialsAPI, SingUpDataAPI } from "./authTypes";
import { UserApi } from "../User/userType";

 async  function singIn(email:string,password:string):Promise<AuthCredentialsAPI>{
    const response = await api.post<AuthCredentialsAPI>('login', {email,password})
    return response.data

}

 async function singOut():Promise<string>{
    const response = await api.get<string>('profile/logout')
    return response.data
}


async function singUp(data:SingUpDataAPI):Promise<UserApi>{
    const response = await api.post<UserApi>('register', data)
    return response.data
}

export const authApi = {
    singIn,
    singUp,
    singOut
}