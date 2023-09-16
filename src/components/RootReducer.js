import { combineReducers} from "redux"
import cakereducer from "./CakeApp/Reducer"

const RootReducer = combineReducers({
     cake : cakereducer
})

export default RootReducer;