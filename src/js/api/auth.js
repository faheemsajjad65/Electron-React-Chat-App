import firebase from 'firebase/app'
import 'firebase/auth';
import db from '../db/firestore';


const createUserProfile = userProfileData => 
    db
        .collection("profiles")
        .doc(userProfileData.uid)
        .set(userProfileData)


export async function register(props){
    try{
        const {user} = await firebase.auth().createUserWithEmailAndPassword(props.email, props.password)
        const userProfile = {
            uid:user.uid,
            username:props.username,
            email:props.email,
            avatar:props.avatar,
            joinchats:[]
        }
        createUserProfile(userProfile);

        return user;
    }catch(err){
        return Promise.reject(err.message);
    }
}

export const onAuthStateChange = onAuth => firebase.auth().onAuthStateChanged(onAuth)

export const logout = () => firebase.auth().signOut();

export const login = async (props) => firebase.auth().signInWithEmailAndPassword(props.email,props.password);

export const userProfile = uid => 
    db
        .collection("profiles") 
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data());
