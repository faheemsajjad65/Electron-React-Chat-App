import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
// import Base from '../layouts/Base';
// import LoadingView from "../components/shared/LoadingView"
import Home from "./Home"


export default function Welcome() {

  const [showLoginView , setShowLoginView] = useState(true)

  const user = useSelector(({auth}) => auth.user);
  // const isChecking = useSelector(({auth}) => auth.isChecking); 

  // if(isChecking){
  //   return <LoadingView />
  // }

  if (user) {
    return <Home />
  }
  

  return (
    // <Base>
      <div className="centered-view">
        <div className="centered-container">
          { showLoginView?<LoginForm />:<RegisterForm/>}
          <small className="form-text text-muted mt-2">{showLoginView ? "Not registered yet?" : "Already registered?"} 
            <span
              onClick ={() => setShowLoginView(!showLoginView)}
              className="btn-link ml-2">{showLoginView ? "Register" : "Login"}</span>
          </small>
        </div>
      </div>
    // </Base>
  )
}
