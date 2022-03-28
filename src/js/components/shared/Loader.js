import React from 'react'

import './Loader.scss'

export default function Loader() {
  return (
    <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
  )
}