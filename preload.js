const {ipcRenderer , contextBridge} = require('electron');

// window.sendNotification = (message) => {
//     ipcRenderer.send('notify',message)
// };

contextBridge.exposeInMainWorld('electron',{
    notification:{
        sendNotification(message){
            ipcRenderer.send('notify',message)
        }
    }
})