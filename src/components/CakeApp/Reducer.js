import { BUILD_CAKE, BUY_CAKE } from "./ActionType"

const initialState = {NumberOfCake : 20}

const cakereducer = (state=initialState, action) => {
  switch(action.type){
    case BUY_CAKE:
        return{
            ...state,
            NumberOfCake : state.NumberOfCake - 1,
        }
        case BUILD_CAKE :
            return{
                ...state,
                NumberOfCake : state.NumberOfCake + 1,
            }
            default:
                return state;
  }
}

export default cakereducer;