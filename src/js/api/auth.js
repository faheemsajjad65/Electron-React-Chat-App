import { fs , auth } from '../db/firestore';


export const createUserProfile = userProfileData => 
    fs
        .collection("profiles")
        .doc(userProfileData.uid)
        .set(userProfileData)

export const userProfile = uid => 
    fs
        .collection("profiles") 
        .doc(uid)
        .get()
        .then(snapshot => snapshot.data());

export const register = props => {
    return auth
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

export const onAuthStateChange = onAuth => auth.onAuthStateChanged(onAuth)

export const logout = () => auth.signOut();

export const login = props => {
    return auth
        .signInWithEmailAndPassword(props.email,props.password)
        .then(async ({user}) => {
            const userMeta = await userProfile(user.uid);
            return userMeta;
        })
        .catch(err => {
            throw new Error(err);
        })
    // const { user } = await auth.signInWithEmailAndPassword(props.email,props.password);
    // const userMeta = await userProfile(user.uid);
    // return userMeta;
}


