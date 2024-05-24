import { User,UserApi } from "@domain";


export type AuthCredentials = {
    token:string
    user:User
}


export type AuthCredentialsAPI = {
    auth:{
        type:string,
        token: string
    },
    user: UserApi
}

export type SingInData = {
    username?:string
    email?:string
    password:string
}


export type SingUpDataAPI = {
    firstName:string;
    lastName:string;
    username:string;
    email:string;
    password:string
}

export type SingUpData = {
    firstName:string;
    lastName:string;
    username:string;
    email:string;
    password:string
}

export type FieldIsAvailableAPI = {
    message:string
    isAvailable:boolean
}