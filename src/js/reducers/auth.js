
// const DEFAULT_STATE = {
//     user : null,
//     isChecking:false
// }

// export default function authReducer(state = DEFAULT_STATE , action){
    
    // switch(action.type){
    //     case 'AUTH_ON_INIT':
    //         return { user: null , isChecking:true};
    //     case 'AUTH_ON_SUCCESS':
    //         return { user: action.user , isChecking:false};
    //     case 'AUTH_ON_ERROR':
    //         return { user: null , isChecking:false};
    //     case 'AUTH_REGISTER_INIT':
    //     case 'AUTH_LOGIN_INIT':
    //         return { ...state , isChecking:true};
    //     // case 'AUTH_REGISTER_SUCCESS':
    //     // case 'AUTH_LOGIN_SUCCESS':
    //     //     return { ...state , isChecking:false};
    //     default:
    //         return state;
    // }
// }


import {combineReducers} from 'redux';
import { createErrorReducer , createIsFetchingReducer } from './common'


// function loginReducer(state = {error : null} , action){
    
//     switch(action.type){
//         case 'AUTH_LOGIN_INIT':
//             return  { error:null };
//         case 'AUTH_LOGIN_ERROR':
//             return { error: action.error };
//         default:
//             return state;
//     }
// }


// function registerReducer(state = {error : null} , action){
//     switch(action.type){
//         case 'AUTH_REGISTER_INIT':
//             return  {error:null};
//         case 'AUTH_REGISTER_ERROR':
//             return {error:action.error};
//         default:
//             return state;
//     }
// }

const createLoginReducer = () => combineReducers({
    error:createErrorReducer("AUTH_LOGIN"),
    isChecking:createIsFetchingReducer("AUTH_LOGIN")
})
const createRegisterReducer = () => combineReducers({
    error:createErrorReducer("AUTH_REGISTER"),
    isChecking:createIsFetchingReducer("AUTH_REGISTER")
})

function createAuthReducer(){
    const user = (state = null,action) => {
        switch(action.type){
            case 'AUTH_ON_ERROR':
            case 'AUTH_ON_INIT':
                return  null;
            case 'AUTH_ON_SUCCESS':
            // case 'AUTH_LOGIN_SUCCESS':
            // case 'AUTH_REGISTER_SUCCESS':
                return action.user != undefined ?action.user:null;
            default:
                return state;
        }
    }

    // const isChecking = (state = false , action) => {
    //     switch(action.type){
    //         case 'AUTH_REGISTER_INIT':
    //         case 'AUTH_LOGIN_INIT':
    //         case 'AUTH_ON_INIT':
    //             return true;
    //         case 'AUTH_ON_ERROR':
    //         case 'AUTH_ON_SUCCESS':
    //         case 'AUTH_LOGIN_ERROR':
    //         case 'AUTH_REGISTER_ERROR':
    //             return false
    //         default:
    //             return state;
    //     }
    // }

    return combineReducers({
        user,
        isChecking:createIsFetchingReducer("AUTH_ON"),
        // login:loginReducer,
        // register:registerReducer
        login:createLoginReducer(),
        register:createRegisterReducer()
    });
}

export default createAuthReducer();


