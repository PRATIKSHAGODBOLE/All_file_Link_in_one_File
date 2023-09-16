
//FolderName : CakeShopApp = Redux
//ActionType.js | ActionFun.js | Reducer.js | CakeCounter1.js | CakeCounter2.js
//Store.js and rootReducerCombine.js


import { BUID_CAKE, BUY_CAKE } from "./ActionType"

export const buyCake = () => {
    return{
        type : BUY_CAKE
    }
}

export const buildCake = () => {
    return{
        type : BUID_CAKE
    }
}


