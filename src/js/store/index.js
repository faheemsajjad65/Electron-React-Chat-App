import { createStore, applyMiddleware , combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';
import authReducer from "../reducers/auth";
import appReducer from "../reducers/app";
import appMiddleware from "./middlewares/app";
import settingsReducer from "../reducers/settings"



export default function configureStore(){
    const middlerwares = [
        thunkMiddleware,
        appMiddleware
    ]

    const store = createStore(
        combineReducers(
            {
                chats:chatReducer,
                auth:authReducer,
                app:appReducer,
                settings:settingsReducer
            }
        ),
        applyMiddleware(
            ...middlerwares
        )
    );

    return store;
}