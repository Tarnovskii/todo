import {combineReducers, compose, createStore} from "redux";
import {initialState} from "./initial-store";
import {mainPageState} from "../reducers/mainPageReducer";
import {modalState} from "../reducers/modalReducers";

const reducers = combineReducers({
   mainPageState,
   modalState,
})

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(reducers, initialState, composeSetup())
