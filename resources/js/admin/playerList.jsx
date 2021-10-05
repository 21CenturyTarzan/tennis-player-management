import ReactDOM from 'react-dom';
import { filter } from 'lodash';
import axios from 'axios';
import React, {useState, useEffect} from 'react'

import PageLoader from '../components/pageloader';

import Scrollbar from '../components/scrollbar';


export default function PlayerList() {

  const [PLAYERLIST, setPlayerList] = useState([]);
  const [FILTERLIST, setFilterList] = useState([]);
  const [loadState, setLoadState] = useState('');
  const [filterName, setFilterName] = useState('');

  const players = () => {
      return(
        <Scrollbar>
          <div className="player-list pl-3 pr-3">
            {
               FILTERLIST.map((player,id)=>(
                  <a key={id}>
                    <div className="d-flex align-items-center mb-2">
                        <div className="symbol me-5">
                            <img src={player.account.img} alt={player.account.img} />
                        </div>
                        <div className="flex-grow-1">
                            <span className="text-dark fw-bolder text-hover-primary fs-6">{player.account.name}</span>
                            <span className="text-muted d-block">{convertDate(player.account.created_at)}</span>
                        </div>
                        <div>
                          <img src="/images/edit_star_1.svg" width="20" height="20"/>
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
    setLoadState('loading');
    await axios.get("/api/players")
        .then( res => {
          if(res.data == 'failed'){
            setPlayerList([]);
            setFilterList([]);
          }
          else{
            setFilterList(res.data);
            setPlayerList(res.data);
          }
            setLoadState('loaded');
        })
  }, [])

  const convertDate = (str_date) => {
        let date = new Date(str_date)
        return ('' + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear());
  }

  const handleChange = (e) => {
      var query = e.target.value;
      setFilterName(query);
      var filterlist = filter(PLAYERLIST, (_user) => _user.account.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      setFilterList(filterlist);
  }


  return (
      <>
        <div className="px-3 pt-3">
              <input type="search" className="form-control" placeholder="選手検索" onChange={handleChange} value={filterName}/>
        </div>
        <p className="pr-3 pl-3 m-0 text-right">{`(${PLAYERLIST.length}/${FILTERLIST.length})`}</p>
        {
          loadState == 'loading' && 
          <>
            <PageLoader query="#player-list-box"/>
            <p className="text-center mt-5">Loading...</p>
          </>
        }
        {
          loadState =='loaded' && PLAYERLIST.length == 0 && 
              <p className="text-center mt-5">登録された選手がいません。</p>
        }
        {
          loadState == 'loaded' && PLAYERLIST.length != 0 && FILTERLIST.length != 0 && players()
        }
        {
          loadState == 'loaded' && PLAYERLIST.length != 0 && FILTERLIST.length == 0 && 
              <p className="text-center mt-5">検索結果：0人</p>
        }
      </>
  );
}


if(document.querySelector('#player-list-box')){
    ReactDOM.render(
        <PlayerList />,
    document.querySelector('#player-list-box')
  );
}

