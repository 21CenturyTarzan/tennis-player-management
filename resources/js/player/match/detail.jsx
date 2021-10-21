import React, { useEffect, useState } from 'react';

import PlayerMatchPrepareDetail from './prepare/index';
import PlayerMatchResultDetail from './result/index';

import CircularProgress from '@material-ui/core/CircularProgress';


const PlayerMatchDetail = (props) => {

    const [load, setLoad] = useState(false);
    const [tournament, setTournament] = useState(null);

    useEffect( () => {

        var id = Number(document.getElementById('player_id').value);
        axios.get(`/api/player/match/detail/${props.match.params?.id}`, {params:{player_id: id}})
        .then( response=>{
            if(response.data.status_code == 200){
                
                Promise.resolve()
                .then(()=>{
                    setTournament(response.data.params.tournament);
                })
                .then(()=>{
                    setLoad(true);
                })
            }
        })
    }, []);
   
    if(!load) 
        return(
            <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', 
                left:'calc(50% - 22px)', color:'yellow', position:'absolute'}}/>
        )
    else 
    return (
        <div id="match">
            <PlayerMatchPrepareDetail tournament={tournament}/>
            <PlayerMatchResultDetail  tournament={tournament}/>
        </div>
    );
}



export default PlayerMatchDetail;