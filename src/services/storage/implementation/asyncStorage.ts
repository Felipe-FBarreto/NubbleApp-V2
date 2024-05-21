import AsyncStorage from "@react-native-async-storage/async-storage";
import { Storage } from "@services";

export const asyncStorage:Storage = {
    getItem: async (key) => {
        const item = await AsyncStorage.getItem(key)
        if(item){
            return JSON.parse(item)
        }
        return null
    },
    setItem: async (key,value) => {
        const item = await AsyncStorage.setItem(key,JSON.stringify(value))
    },
    removeItem: async (key) => {
        const item = await AsyncStorage.removeItem(key)
    }
}