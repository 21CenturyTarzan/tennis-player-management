import ReactDOM from 'react-dom';
import { filter } from 'lodash';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import PageLoader from '../layouts/pageloader';

import Scrollbar from '../layouts/scrollbar';


export default function NoticeBox() {

  const [PLAYERLIST, setPlayerList] = useState([]);
  const [FILTERLIST, setFilterList] = useState([]);
  const [isLoadPlayerList, setLoadPlayerListFlag] = useState('');
  const [filterName, setFilterName] = useState('');

  const players = () => {
      return(
        <Scrollbar>
          <div className="notice pl-3 pr-3">
            {
              FILTERLIST.length == 0 ? 
                <p className="text-center">
                {
                  PLAYERLIST.length == 0 ? <span>登録された選手がいません。</span> : <span>検索結果：0人</span>
                }
                </p>
              : FILTERLIST.map((player,id)=>(
                  <a key={id}>
                    <div className="d-flex align-items-center mb-2">
                        <div className="symbol me-5">
                            <img src={player.img} alt={player.img} />
                        </div>
                        <div className="flex-grow-1">
                            <span className="text-dark fw-bolder text-hover-primary fs-6">{player.name}</span>
                            <span className="text-muted d-block fw-bold">{convertDate(player.created_at)}</span>
                        </div>
                        <div>
                          <img src="/images/msg_show.png" width="20" height="20"/>
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
    setLoadPlayerListFlag('loading');
    await axios.get("/api/players")
        .then( res => {
          setPlayerList(res.data);
          setFilterList(res.data);
          setLoadPlayerListFlag('loaded');
        })
  }, [])

  const convertDate = (str_date) => {
        let date = new Date(str_date)
        return ('' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
  }

  const handleChange = (e) => {
      var query = e.target.value;
      setFilterName(query);
      var filterlist = filter(PLAYERLIST, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      setFilterList(filterlist);
  }


  return (
      <>
        {
          isLoadPlayerList != 'loaded' ? <PageLoader query="#notice-list-box #notice-list"/> : players() 
        }
      </>
  );
}


if(document.querySelector('#notice-list-box #notice-list')){
    ReactDOM.render(
        <NoticeBox />,
    document.querySelector('#notice-list-box #notice-list')
  );
}

