import React from 'react';
import ChatMessagesList from '../components/ChatMessagesList';
import ChatUsersList from '../components/ChatUsersList';
import ViewTitle from '../components/shared/ViewTitle';
import { useParams } from 'react-router-dom';
import { withBaseLayout } from '../layouts/Base';

function Chat() {
    const { id } = useParams();

    return (
      
      <div className="row no-gutters fh">
        <div className="col-3 fh">
          <ChatUsersList />
        </div>
        <div className="col-9 fh">
          <ViewTitle text={`Joined Chanel:${id}`} />
          <ChatMessagesList />
        </div>
      </div>
    )
}

export default withBaseLayout(Chat,{canGoBack:true})
