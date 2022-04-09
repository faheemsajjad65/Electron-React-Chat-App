



export const updateSettings = (setting , value) => {
    return {
        type: "SETTINGS_UPDATE",
        setting,
        value
    }
}


export const loadInitialSettings = () => {
    return {
        type:"LOAD_SETTINGS"
    }
}