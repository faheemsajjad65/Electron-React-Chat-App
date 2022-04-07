import Notifications from "../../utils/notifications"


export default store => next => action => {
    // const state = store.getState();
    // debugger;
    switch(action.type){
        case "APP_IS_ONLINE":
        case "APP_IS_OFFLINE":
            Notifications.show({
                title:"Connection Status",
                body:action.isOnline?"Online":"Offline"
            });
        default:
            // do nothing
    }
    next(action)
}