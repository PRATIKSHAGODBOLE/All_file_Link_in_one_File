import { createStore, applyMiddleware } from "redux";
import RootReducers from "./rootReducerCombine";
import logger from 'redux-logger'      

const store = createStore(RootReducers, applyMiddleware(logger))//applyMiddleware logger ko implement kro

export default store;