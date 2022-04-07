import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"

function createChatReducer(){
    const joined = (state = [] , action) => {
        switch(action.type){
            case 'CHATS_FETCH_CLEAR':
                return [];
            case 'CHATS_FETCH_SUCCESS':
                return action.joined
            case 'CHATS_JOIN_SUCCESS':
                return [...state,action.chat]
            default:
                return state;
        }
    }

    const available = (state = [] , action) => {
        switch(action.type){
            case 'CHATS_FETCH_CLEAR':
                return [];
            case 'CHATS_FETCH_SUCCESS':
                return action.available
            case 'CHATS_JOIN_SUCCESS':
                return state.filter(chat => action.chat.id != chat.id)
            default:
                return state;
        }
    }


    const activeChats = createReducer({},{
        'CHATS_SET_ACTIVE_CHAT' : (state , action) => {
            const {chat} = action;
            state[chat.id] = chat;
        }
    })

    return combineReducers({
        joined,
        available,
        activeChats
    })
}


export default createChatReducer();