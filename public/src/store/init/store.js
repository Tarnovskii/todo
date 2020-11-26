import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {initialState} from "./initial-store";
import {mainPageState} from "../reducers/mainPageReducer";
import {modalState} from "../reducers/modalReducers";
import thunk from 'redux-thunk'
import {tasksState} from "../reducers/tasksReducer";

const reducers = combineReducers({
   mainPageState,
   modalState,
   tasksState
})

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const middlewareEnhancer = applyMiddleware(thunk)

export const store = createStore(reducers, initialState, composeSetup(middlewareEnhancer))
