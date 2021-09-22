import ReactDOM from 'react-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import PageLoader from '../layouts/pageloader';

import Scrollbar from '../layouts/scrollbar';


export default function MessageBox() {

  const [MSGLIST, setMsgList] = useState([]);
  const [loadState, setLoadState] = useState('');
  const [replyText, setReplyText] = useState('');
  const [isSubmitting, setSubmitFlag] = useState(false);

  const [currentMsg, setCurrentMsg] = useState(null);

  const messages = () => {
      return(
        <Scrollbar>
          <div className="notice pl-3 pr-3">
            {
              MSGLIST.length == 0 ? 
              (
                <p className="text-center mt-5">
                {
                  loadState =='loaded' ? <span>メッセージが存在しません。</span>
                                       : <span>Loading...</span>
                }
                </p>
              )
              : MSGLIST.map((msg,id)=>(
                  <a key={id} id={msg.id} onClick={()=>showModal(id)}>
                    <div className="d-flex align-items-center mb-2">
                        <div className="symbol me-5">
                            <img src={msg.account.img} alt={msg.account.img} />
                        </div>
                        <div className="flex-grow-1">
                            <span className="text-dark fw-bolder text-hover-primary fs-6">{msg.account.name}</span>
                            <span className="text-muted d-block ft-12">{convertDate(msg.created_at)}</span>
                            <span className="text-muted d-block">{msg.msg.slice(0,20) + '...'}</span>
                        </div>
                        <div>
                          <img src={`/images/icon-msg-${msg.state}.png`} width="20" height="20"/>
                        </div>
                    </div>
                  </a>
                ))
            }
          </div>      
        </Scrollbar>
      )      
  }

  const msg_modal = () => {
      return(
    <>
      <div className="modal fade" id="msgEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="msgEdit" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-scrollable">
              <div className="modal-content ">
                <div className="modal-header py-2">
                    <div className="d-flex align-items-center">
                        <div className="symbol me-5">
                            <img src={currentMsg.account.img}/>
                        </div>
                        <div className="flex-grow-1">
                            <span className="text-dark fw-bolder text-hover-primary fs-6">{currentMsg.account.name}</span>
                            <span className="text-muted d-block">{convertDate(currentMsg.created_at)}</span>
                        </div>
                    </div>
                </div>
                <div className="modal-body p-0">
                    <div className="px-3 py-2" style={{borderBottom:'1px solid #dee2e6', height:'50%'}}>
                        <pre className="pre">{currentMsg.msg}</pre>
                    </div>
                    <div className="px-3 py-2" style={{height: '50%'}}>
                        <textarea className="p-2" value={replyText} placeholder="返信内容" onChange={e=>setReplyText(e.target.value)} required/>
                    </div>
                  </div>
                <div className="modal-footer px-0">
                    <div className="row w-100">
                        <div className="col-6">
                            <LoadingButton fullWidth type="submit" onClick={handleSubmit} variant="contained" loading={isSubmitting}>返信</LoadingButton>
                        </div>
                        <div className="col-6">
                            <Button fullWidth variant="contained" color="secondary" data-bs-dismiss="modal" id="closeModal">キャンセル</Button> 
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </>
      )
  }
  
  const showModal = (id) => {
      if(loadState == 'loading') return;
      var msg_id = MSGLIST[id].id;

      setLoadState('loading');
      setReplyText('');
      setSubmitFlag(false);

      axios.put(`/api/msgs/read/${msg_id}`)
        .then( res => {
          setMsgList(res.data);
          setLoadState('loaded');
          Promise.resolve()
            .then(() => { 
              setCurrentMsg(MSGLIST[id]);
            } )
            .then(() => $('#msgEdit').modal('show'))
      })
  }

  useEffect( async () => {
    // ルームを取得
    setLoadState('loading');
    await axios.get("/api/msgs")
        .then( res => {
          setMsgList(res.data);
          setLoadState('loaded');
        })
  }, [])

  const convertDate = (str_date) => {
        let date = new Date(str_date)
        return ('' + (date.getMonth()+1) + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
  }

  const handleSubmit = () => {
      if(replyText.length == 0) {
          alert('input message');
          return;
      }

      var msg_id = currentMsg.id;
      setSubmitFlag(true);

      const formdata = new FormData();
      formdata.append('msg', replyText);

      axios.post(`/api/msgs/reply/${msg_id}`, formdata)
      .then( res => {
          setMsgList(res.data);
          setSubmitFlag(false);
          $('#closeModal').click();
      })
  }

  return (
      <>
        {
          loadState != 'loaded' && <PageLoader query="#message-box"/>
        }
        {
          messages()
        }
        {
          currentMsg != null &&  msg_modal()
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

