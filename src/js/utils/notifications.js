export default {
    setup(){
        if(!("Notification" in window)){
            console.error("This Browser window does not support notifications.");
        }
        else if(Notification.permission == 'granted')   {
            return;
        }
        else if(Notification.permission !== 'denied'){
            Notification.requestPermission()
            .then(permission => {
                if(permission == 'granted'){
                    console.log("Permission has been granted.");
                }
            })
            .catch()

        }
    },
    show({title , body}){
        new Notification(title, {body});
    }
}