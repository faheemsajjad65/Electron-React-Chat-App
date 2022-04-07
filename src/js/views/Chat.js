import React, { useEffect } from 'react';
import ChatMessagesList from '../components/ChatMessagesList';
import ChatUsersList from '../components/ChatUsersList';
import ViewTitle from '../components/shared/ViewTitle';
import { useParams } from 'react-router-dom';
import { withBaseLayout } from '../layouts/Base';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeToChat } from '../actions/chats';
import { subscribeToProfile } from '../api/chats';

function Chat() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const activeChat = useSelector(({chats}) => chats.activeChats[id]);
    const joinedUsers = activeChat?.joinUsers

    useEffect(()=>{
      const unSubFromChat = dispatch(subscribeToChat(id));
      return () => {
        unSubFromChat();
      }
    },[])


    useEffect(() => {
      joinedUsers && subscribeToJoinedUsers(joinedUsers)
    },[joinedUsers])

    const subscribeToJoinedUsers = (jUsers) => {
      jUsers.forEach(user => {
        dispatch(subscribeToProfile(user.uid))
      })
    }
    

    return (
      
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatUsersList users = {activeChat?.joinUsers} />
        </div>
        <div className="col-9 fh">
          <ViewTitle text={`Channel ${activeChat?.name}`} />
          <ChatMessagesList />
        </div>
      </div>
    )
}

export default withBaseLayout(Chat,{canGoBack:true})
