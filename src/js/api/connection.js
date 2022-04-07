import { db } from "../db/firestore"

export const onConnectionChanged = onConnection => 
    db
        .ref('.info/connected')
        .on('value', snapshot => {
            console.log("asasasa");
            onConnection(snapshot.val())
        })