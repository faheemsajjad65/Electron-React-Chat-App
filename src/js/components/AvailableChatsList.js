import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { joinChat } from '../actions/chats';

export default function AvailableChatsList({chats}) {

    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user);

    const askToJoinChat = chat => {
        const isConfirm = confirm(`Do you want to join chat : ${chat.name}`);
        if(isConfirm){
            dispatch(joinChat(chat,user.uid));
        }
    }

    return (
        <div className="container-fluid">
            <div className="row mt-3">
            { false &&
                <div className="container-fluid">
                <div className="alert alert-warning">No chats to join :(</div>
                </div> }

                {
                    chats.map(chat => 
                        <div key={chat.id} className="col-lg-3 col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">{chat.name}</h5>
                                <p className="card-text">{chat.description}</p>
                                <button
                                    onClick={ () => askToJoinChat(chat)}
                                    className="btn btn-outline-primary">Join Chat</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
