import {applyMiddleware, combineReducers, createStore} from "redux";
// @ts-ignore
import profileReducer from "./profileReducer.ts";
// @ts-ignore
import messageReducer from "./messageReducer.ts";
// @ts-ignore
import usersReducer from "./usersReducer.ts";
// @ts-ignore
import authReducer from "./authReducer.ts";
// @ts-ignore
import appReducer from "./appReducer.ts";

import thunk from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>


let store = createStore(reducers, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export default store;