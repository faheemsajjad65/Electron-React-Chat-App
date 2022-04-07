import firebase from 'firebase/app'
import * as api from '../api/connection'
import { fs } from "../db/firestore"

export const getOnlineStatus = isOnline => {
    return {
        state: isOnline?'online' : 'offline',
        lastChanged : firebase.firestore.FieldValue.serverTimestamp()
    }
}


export const setUserOnlineStatus = (uid , isOnline) => {
    const userRef = fs.doc(`/profiles/${uid}`);
    const updatedData = getOnlineStatus(isOnline);
    return userRef.update(updatedData)
}

export const checkUserConnection = uid => dispatch => {
    api.onConnectionChanged((isConnected) => {
        console.log("Connected with firestore : ",isConnected);
        setUserOnlineStatus(uid,isConnected)
        dispatch({type:"CONNECTION_USER_STATUS_CHANGED"})
    })
}