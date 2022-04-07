import React from 'react'
// import {Link} from 'react-router-dom';

export default function ViewTitle(props) {
  return (
    <div className="chat-name-container">
        <span className="name">{props.text}</span>
        <div>{props.children}</div>
        {/* <Link
            to="/"
            className="btn btn-primary btn-sm back-button">Back</Link> */}
    </div>
  )
}
