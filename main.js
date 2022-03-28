const { app, BrowserWindow, Notification, ipcMain} = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

// same like create server in nodeJS
const createWindow = () => {
    const win = new BrowserWindow({
      width: 1100,
      height: 790,
      backgroundColor:"white",
      webPreferences:{
          // it means you are now able to execute nodeJS code in HTML file means we cant use require without it
          nodeIntegration:false, 
          // will sanitize JS code
          // TODO: explain when react application is initialized
          worldSafeExecuteJavaScript:true,
          // is a feature that ensure that both your preload scripts and electron internal logic run in a separate context
          contextIsolation:true,
          preload:path.join(__dirname,'preload.js')   
        }
    })
  
    win.loadFile('index.html')
    isDev && win.webContents.openDevTools()
}

if(isDev){
    require('electron-reload')(__dirname),{
        electron: path.join(__dirname,'node-modules','.bin','electron')
    };
}

// responsible for opening window on screen
app.whenReady()
    .then(() => {
        createWindow();
        // const notification = new Notification({title: 'Test Notification',body: 'lorem ipsum lorem ipsum'});

        // notification.show();

        // const parsedPath = path.parse('/home/user/dir/file.txt');
        // console.log(parsedPath.base);
        // console.log(parsedPath.ext);
    })

ipcMain.on('notify',(e , message)=>{
    const notification = new Notification({title: 'Test Notification',body: message});
    notification.show();
})

// what happened when you click on x this button or close the window
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// what happen when you again open the window
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})