import Notifications from "../../utils/notifications"

export default store => next => action => {
    switch(action.type){
        case "APP_IS_ONLINE":
        case "APP_IS_OFFLINE":
            Notifications.show({
                title:"Connection Status",
                body:action.isOnline?"Online":"Offline"
            });
        case "SETTINGS_UPDATE":
            const { setting,value } = action;
            const currentSettings = localStorage.getItem('app-settings');
            const parsedCurrentSettings = currentSettings? JSON.parse(currentSettings) : {};
            const settings = {...parsedCurrentSettings,[setting]:value};
            const stringifiedSettings = JSON.stringify(settings)
            localStorage.setItem('app-settings',stringifiedSettings)
        default:
            // do nothing
    }
    next(action)
}