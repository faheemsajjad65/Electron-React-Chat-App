
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


function loginReducer(state = {error : null} , action){
    switch(action.type){
        case 'AUTH_LOGIN_INIT':
            return  {error:null};
        case 'AUTH_LOGIN_ERROR':
            return { error: action.error };
        default:
            return state;
    }
}

function registerReducer(state = {error : null} , action){
    switch(action.type){
        case 'AUTH_REGISTER_IN':
            return  {error:null};
        case 'AUTH_REGISTER_ERROR':
            return {error:action.error};
        default:
            return state;
    }
}


function createAuthReducer(){
    const user = (state = null,action) => {
        switch(action.type){
            case 'AUTH_ON_ERROR':
            case 'AUTH_ON_INIT':
                return  null;
            case 'AUTH_ON_SUCCESS':
                return action.user;
            default:
                return state;
        }
    }

    const isChecking = (state = false , action) => {
        switch(action.type){
            case 'AUTH_REGISTER_INIT':
            case 'AUTH_LOGIN_INIT':
            case 'AUTH_ON_INIT':
                return true;
            case 'AUTH_ON_ERROR':
            case 'AUTH_ON_SUCCESS':
                return false
            default:
                return state;
        }
    }

    return combineReducers({
        user,
        isChecking,
        login:loginReducer,
        register:registerReducer
    });
}


export default createAuthReducer();


