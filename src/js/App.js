import React, { useEffect } from 'react'; 
import Home from './views/Home';
// import { ipcRenderer } from 'electron'; // we cant use this here just bcz of security. so we take this in preload 

// const sendAlert = () => {
//     // alert("Hello !");
//     // ipcRenderer.send('notify','This is my custom message')
//     // window.sendNotification('This is my custom message from window.sendNotification');
//     electron
//         .notification
//         .sendNotification('This is my custom message from window.sendNotification');
// }


import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './views/Login';
import Register from './views/Register';
import Settings from './views/Settings';
import Chat from './views/Chat';
import Welcome from './views/Welcome';
import { listenToAuthChanges } from './actions/auth';

import {Provider} from 'react-redux';
import configureStore from './store/index';

function App(){
    // const title = "hello faheem sajjad";
    // const enhancedTitle = title + '- React!';
    
    // return (
    //     <>
    //         <h1>{enhancedTitle}</h1>
    //         <button onClick={sendAlert} >Send Alert</button>
    //     </>
        
    // )

    const store = configureStore();

    // const dispatch = useDispatch();

    useEffect(()=>{
      store.dispatch(listenToAuthChanges())
    },[]);

    

    return (
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className='content-wrapper'>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat/:id" element={<Chat />} />
                <Route path="/settings" element={<Settings />} />
                

                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}
              </Routes>
            </div>
          </Router>
        </Provider>
      )
}

export default App;