import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';

export default function Navbar(props) {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(({auth})=> auth.user);

  return (
    <div className="chat-navbar">
        <nav className="chat-navbar-inner">
            <div className="chat-navbar-inner-left">
            {props.canGoBack && <button onClick={() => navigate(-1)} className='btn btn-outline-primary' >Back</button>}
            {
              props.view != 'Settings' && 
              <Link to="/settings" className="btn btn-outline-success ml-2">Settings</Link>
            }
            
            </div>
            <div className="chat-navbar-inner-right">
            
            {/* <Link
                to="/register"
                className="btn btn-outline-danger ml-2">Register</Link> */}
            {/* <Link
                to="/"
                className="btn btn-outline-success ml-2">Login</Link> */}
            {
              user && 
              <>
                <img className='avatar' src={user.avatar} />
                <span className="logged-in-user">Hi {user.username}</span>
                <button
                className="btn btn-outline-danger ml-2"
                onClick={() => dispatch(logout)}>
                Logout
              </button>
              </>
            }
            
            </div>
        </nav>
    </div>
  )
}
