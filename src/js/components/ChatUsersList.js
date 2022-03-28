import React from 'react'
import ChatSearch from './ChatSearch'

export default function ChatUsersList() {
  return (
    <div className="list-container">
        <ChatSearch />
        <ul className="items">
            <li
            onClick={() => {}}
            className="item">
            <div className="item-status">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <span className="status online"></span>
            </div>
            <p className="name-time">
            <span className="name mr-2">Some User 1</span>
            </p>
            </li>
            <li
            onClick={() => {}}
            className="item">
            <div className="item-status">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <span className="status online"></span>
            </div>
            <p className="name-time">
            <span className="name mr-2">Some User 2</span>
            </p>
            </li>
            <li
            onClick={() => {}}
            className="item">
            <div className="item-status">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <span className="status online"></span>
            </div>
            <p className="name-time">
            <span className="name mr-2">Some User 3</span>
            </p>
            </li>
            <li
            onClick={() => {}}
            className="item">
            <div className="item-status">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <span className="status online"></span>
            </div>
            <p className="name-time">
            <span className="name mr-2">Some User 4</span>
            </p>
            </li>
        </ul>
    </div>
  )
}
