import { BUILD_CAKE, BUY_CAKE } from "./ActionType"

export const buycake = () =>{
    return{
        type : BUY_CAKE
    }
}

export const buildcake = () => {
    return{
        type : BUILD_CAKE
    }
}