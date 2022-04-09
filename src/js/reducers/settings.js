
const INITIAL_STATE = {
    isDarkTheme:false,
    playSound:true,
    showNotifications:true
}

export default function settingsReducer(state = INITIAL_STATE, action ) {
    switch(action.type){
        case 'SETTINGS_UPDATE':
            return {...state , [action.setting]:action.value}
        case 'LOAD_SETTINGS':
            const settings = JSON.parse(localStorage.getItem('app-settings'))
            return {...state , ...settings}
        default:
            return state;
    }
}