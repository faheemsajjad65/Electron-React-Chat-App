import firebase from 'firebase/app'
import 'firebase/auth';
import db from '../db/firestore';


export const createUserProfile = userProfileData => 
    db
        .collection("profiles")
        .doc(userProfileData.uid)
        .set(userProfileData)


export const register = (props) => firebase.auth().createUserWithEmailAndPassword(props.email, props.password)

export const onAuthStateChange = onAuth => firebase.auth().onAuthStateChanged(onAuth)

export const logout = () => firebase.auth().signOut();

export const login = (props) => firebase.auth().signInWithEmailAndPassword(props.email,props.password);

export const userProfile = uid => 
    db
        .collection("profiles") 
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data());
