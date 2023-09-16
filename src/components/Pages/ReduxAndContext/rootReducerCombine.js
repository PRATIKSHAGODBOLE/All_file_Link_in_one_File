//combine reducer we created outside it's content global information
import {combineReducers} from 'redux';
import cakeReduser from './CakeShopApp/Reducer';
// import CounterReducer from './CounterApp/CounterReducer';


const RootReducers = combineReducers (
    //sort name of reducer file
    {
        cake : cakeReduser,
        // counter : CounterReducer
    }
)

export default RootReducers;