import { MMKV } from "react-native-mmkv";
import { Storage } from "../sotage";

const MMKVINstalce = new MMKV()

export const MMKVStorage:Storage = {
    getItem:  (key) => {
        const item =  MMKVINstalce.getString(key)
        if(item){
            return JSON.parse(item)
        }
        return null
    },
    setItem:  (key,value) => {
        const item = MMKVINstalce.set(key, JSON.stringify(value))
    },
    removeItem:  key => { MMKVINstalce.delete(key)}

}