import { AuthCredentials } from "@domain"

export type AuthCredentialsService = {
    authCredentials: AuthCredentials | null
    saveCredentials: (ac:AuthCredentials) => Promise<void>
    remove: () => Promise<void>
    isLoading:boolean
}

