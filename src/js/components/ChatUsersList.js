import React from 'react'
import ChatSearch from './ChatSearch'

export default function ChatUsersList({users = []}) {
  return (
    <div className="list-container">
        <ChatSearch />
        <ul className="items">
            {
                users.map(user => 
                    (
                        <li
                            key = {user.uid}
                            className="item">
                            <div className="item-status">
                                <img src={user.avatar} alt="Retail Admin" />
                                <span className="status online"></span>
                            </div>
                            
                            <p className="name-time">
                                <span className="name mr-2">{user.username}</span>
                            </p>
                        </li>
                    )
                )
            }
        </ul>
    </div>
  )
}
