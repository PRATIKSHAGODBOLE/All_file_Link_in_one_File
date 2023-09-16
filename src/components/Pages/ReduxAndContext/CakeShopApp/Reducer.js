import { BUID_CAKE, BUY_CAKE } from "./ActionType"

const initialstate = {noOfCakes : 15};

const cakeReduser = (state= initialstate, action) =>{
   switch(action.type){
    case BUY_CAKE:
        return{
            ...state,
            noOfCakes : state.noOfCakes - 1,
        }
        case BUID_CAKE:
        return{
            ...state,
            noOfCakes : state.noOfCakes + 1,
        }
        default :
        return state;
   }
}                       

export default cakeReduser;