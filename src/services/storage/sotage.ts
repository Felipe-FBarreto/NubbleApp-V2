
export type Storage = {
    getItem: <T = unknown>(key:string)=> Promise<T | null>
    setItem: <T>(key:string,value:T)=> void
    removeItem: (key:string,)=> void
}

export let storage:Storage 


export function initializeStorage(storageImpl:Storage){
    storage = storageImpl
}