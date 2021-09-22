import ReactDOM from 'react-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import PageLoader from '../layouts/pageloader';

import Scrollbar from '../layouts/scrollbar';


export default function MessageBox() {

  const [MSGLIST, setMsgList] = useState([]);
  const [isLoadMsgList, setLoadMsgListFlag] = useState('');

  const messages = () => {
      return(
        <Scrollbar>
          <div className="notice pl-3 pr-3 pr-md-1">
            {
              MSGLIST.length == 0 ? 
                <p className="text-center mt-5">
                   <span>メッセージが存在しません。</span>
                </p>
              : MSGLIST.map((msg,id)=>(
                  <a key={id}>
                    <div className="d-flex align-items-center mb-2">
                        <div className="symbol me-5">
                            <img src={msg.img} alt={msg.img} />
                        </div>
                        <div className="flex-grow-1">
                            <span className="text-dark fw-bolder text-hover-primary fs-6">Dmitri</span>
                            <span className="text-muted d-block ft-12">{convertDate(msg.created_at)}</span>
                            <span className="text-muted d-block">{msg.msg.slice(0,20) + '...'}</span>
                        </div>
                        <div>
                          <img src={`/images/msg_${msg.state}.png`} width="20" height="20"/>
                        </div>
                    </div>
                  </a>
                ))
            }
          </div>      
        </Scrollbar>
      )      
  }

  useEffect( async () => {
    // ルームを取得
    setLoadMsgListFlag('loading');
    await axios.get("/api/msgs")
        .then( res => {
          console.log(res.data)
          setMsgList(res.data);
          setLoadMsgListFlag('loaded');
        })
  }, [])

  const convertDate = (str_date) => {
        let date = new Date(str_date)
        return ('' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
  }

  return (
      <>
        {
          isLoadMsgList != 'loaded' ? <PageLoader query="#message-box #message-list"/> : messages() 
        }
      </>
  );
}


if(document.querySelector('#message-box #message-list')){
    ReactDOM.render(
        <MessageBox />,
    document.querySelector('#message-box #message-list')
  );
}

