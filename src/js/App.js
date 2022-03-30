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
  Route,
  Navigate
} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './views/Login';
// import Register from './views/Register';
import Settings from './views/Settings';
import Chat from './views/Chat';
import Welcome from './views/Welcome';
import { listenToAuthChanges } from './actions/auth';

import {Provider, useDispatch,useSelector} from 'react-redux';
import configureStore from './store/index';
import LoadingView from "./components/shared/LoadingView"


function Authenticate({children}){
  const user= useSelector(({auth}) => auth.user);
  return (
    user? children: <Navigate to="/" />
  )
}

function ChatApp(){
    // const title = "hello faheem sajjad";
    // const enhancedTitle = title + '- React!';
    
    // return (
    //     <>
    //         <h1>{enhancedTitle}</h1>
    //         <button onClick={sendAlert} >Send Alert</button>
    //     </>
        
    // )

    
    

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(listenToAuthChanges())
    },[dispatch]);

    const ContentWrapper = ({children}) => <div className='content-wrapper'>{children}</div>

    const isChecking = useSelector(({auth}) => auth.isChecking);
    if(isChecking){
      return <LoadingView />
    }

    return (
        <Router>
          {/* <Navbar /> */}
          <ContentWrapper>
            <Routes>
              <Route path="/" element={ <Welcome />} />
              <Route path="/home" element={<Authenticate> <Home /> </Authenticate>} />
              <Route path="/chat/:id" element={<Authenticate> <Chat /> </Authenticate>} />
              <Route path="/settings" element={<Authenticate> <Settings /> </Authenticate>} />
              
              {/* <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> */}
              
            </Routes>
          </ContentWrapper>
        </Router>
      )
}

const store = configureStore();
function App(){
  return (
    <Provider store={store}>
      <ChatApp />
    </Provider>
  )
}

export default App;