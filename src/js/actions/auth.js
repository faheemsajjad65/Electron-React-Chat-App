import * as api from '../api/auth';

// export function fetchChats(){
//     return async function(dispatch){
//         const chats = await api.fetchChats();
//         const dispatchedData = {
//             type:"CHATS_FETCH_SUCCESS",
//             chats
//         }

//         dispatch(dispatchedData);

//         return chats;
//     }
// }



export const registerUser = formData => dispatch => {

    dispatch({type:"AUTH_REGISTER_INIT"});
    
    return api
        .register(formData)
        .then(user => dispatch({type:"AUTH_REGISTER_SUCCESS", user}))
        .catch(error => dispatch({type: 'AUTH_REGISTER_ERROR', error}));
}

export const loginUser = formData => dispatch => {

    dispatch({type:"AUTH_LOGIN_INIT"});
    
    return api
        .login(formData)
        .then(user => dispatch({type: "AUTH_LOGIN_SUCCESS" , user}))
        .catch(error => {
            dispatch({type: "AUTH_LOGIN_ERROR", error})
        })
}

export const listenToAuthChanges = () => dispatch => {

    dispatch({type:"AUTH_ON_INIT"});
    
    api.onAuthStateChange(async authUser => {
        if(authUser){
            const userProfile = await api.userProfile(authUser.uid);
            dispatch({type:"AUTH_ON_SUCCESS",user:userProfile});
            console.log("AUTHENTICATED")
        }
        else{
            dispatch({type:"AUTH_ON_ERROR"});
            console.log("NOT-AUTHENTICATED ")
        }
    })
}

export const logout = () => dispatch =>{
    api
        .logout()
        .then(_ => dispatch({ // We dn care what is in response 
            type:"AUTH_LOGOUT_SUCCESS"
        }));
}

