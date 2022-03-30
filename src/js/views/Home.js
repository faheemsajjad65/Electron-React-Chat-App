import React,{useEffect} from 'react';
import AvailableChatsList from '../components/AvailableChatsList';
import JoinedChatsList from '../components/JoinedChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import { fetchChats } from '../actions/chats';

import { useDispatch , useSelector } from 'react-redux';
import Base from '../layouts/Base';

export default function Home() {

  const dispatch = useDispatch();
  const chats = useSelector(({chats}) => chats.items)

    useEffect(() => {
      // inorder to get data from store we need help of reducer to access store.
      // so for reducers we need to dispatch the data on the basis of which we get data from store by reducers.
      // component didnt access directly to store. 
      // component first interact with dispatcher and then dispatcher interact with reducers and then reducer will access to store.
      dispatch(fetchChats())
    }, [dispatch])

    return (
        <Base>
          <div className="row no-gutters fh">
            <div className="col-3 fh">
              <JoinedChatsList chats={chats} />
            </div>
            <div className="col-9 fh">
                <ViewTitle text="Chose Youe Channel" />
                <AvailableChatsList chats={chats} />
            </div>
          </div>
        </Base>
        
    )
}