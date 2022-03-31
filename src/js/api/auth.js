import firebase from 'firebase/app'
import 'firebase/auth';
import db from '../db/firestore';


export const createUserProfile = userProfileData => 
    db
        .collection("profiles")
        .doc(userProfileData.uid)
        .set(userProfileData)

export const userProfile = uid => 
    db
        .collection("profiles") 
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data());

export const register = props => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(props.email, props.password)
        .then(async ({user}) => {
            const userProfileMeta = {
                uid:user.uid,
                username:props.username,
                email:props.email,
                avatar:props.avatar,
                joinchats:[]
            }
            await createUserProfile(userProfileMeta);
            return userProfileMeta;
        })
        .catch(err => {
            throw new Error(err);
        })
    // const {user} = await firebase.auth().createUserWithEmailAndPassword(props.email, props.password);
    // const userProfileMeta = {
    //     uid:user.uid,
    //     username:props.username,
    //     email:props.email,
    //     avatar:props.avatar,
    //     joinchats:[]
    // }
    // await createUserProfile(userProfileMeta);
    // return userProfileMeta;
}

export const onAuthStateChange = onAuth => firebase.auth().onAuthStateChanged(onAuth)

export const logout = () => firebase.auth().signOut();

export const login = props => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(props.email,props.password)
        .then(async ({user}) => {
            const userMeta = await userProfile(user.uid);
            return userMeta;
        })
        .catch(err => {
            throw new Error(err);
        })
    // const { user } = await firebase.auth().signInWithEmailAndPassword(props.email,props.password);
    // const userMeta = await userProfile(user.uid);
    // return userMeta;
}


