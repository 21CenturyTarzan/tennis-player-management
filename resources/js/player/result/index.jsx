import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Rating, RatingView } from 'react-simple-star-rating';


function PlayerResult() {
    const [load, setLoad] = useState(false);
    const [tournament, setTournament] = useState(null);

    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/match', {params:{player_id: id}})
        .then( response=>{
            if(response.data.status_code == 200){
                setLoad(true);
                setTournament(response.data.params.tournament);
            }
        })
    }, []);

    return (
    <div id="result">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'500px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to="/player/result/edit" className="edit edit-left py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30" title="Edit"/>
                </Link>
                <span  className="ft-25">試合結果</span>
                <Link to="/player/result/new" className="edit edit-right py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-add.svg" alt="icon-add.svg" width="30" height="30"title="Add"/>
                </Link>
            </h3>
            {
                !load && 
                    <CircularProgress color="secondary" 
                        style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
            }
            {
                load && !tournament &&
                    <p className="mt-5 text-center">登録された資料がありません。</p>
            }
            {
                load && tournament &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合前の課題達成度</p>
                    <div className="px-2 mb-2">
                        {
                            tournament.caution &&
                            <table className="table table-bordered text-center">
                                <tbody>
                                    {
                                        tournament.caution.map((x, i)=>
                                        <tr key={i}>
                                            <td className="w-40-px"><span>{i+1}</span></td>
                                            <td>{x.caution}<br/>
                                             <RatingView stars={10} ratingValue={5}/></td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        } 
                    </div>
                    <div className="px-2 mb-2">
                        <table className="table table-bordered text-center">
                            <tbody>
                                <tr className="table-success">
                                    <td>努力・闘志の評価</td>
                                    <td style={{width: '165px'}}><RatingView stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                                <tr className="table-success">
                                    <td>プレーの自己評価</td>
                                    <td style={{width: '165px'}}><RatingView stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
                </>
            }
        </div>
    </div>
    );
}



export default PlayerResult;