import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import moment from 'moment';


function PlayerGoal() {
    
    const [load, setLoad] = useState(false);
    const [params, setParams] = useState(null);

    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/goal/list', {params:{player_id: id}})
        .then(async (response)=>{
            setLoad(true);
            console.log(response.data.params)
            if(response.data.status_code == 200){
                setParams(response.data.params)
            }
        })
    }, []);

    // useEffect(()=>{
    //     console.log(params);
    // },[params])

    
    return (
        <div id="goal">
            <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
                <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                    <Link to="/player/goal/new">
                        <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                            <AddIcon/>
                        </IconButton>
                    </Link>
                    <span>目標管理</span>
                    <Link to="/player/goal/new">
                        <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                            <AddIcon/>
                        </IconButton>
                    </Link>
                </h3>
                {
                    !load && <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
                }
                {
                    load && params &&
                    <>
                        <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">入力リスト</p>
                        <div className="px-2 mb-2">
                            <table className="table table-bordered mb-2 text-center">
                                <tbody>
                                    <tr>
                                        <th>入力日</th>
                                        <th>予定試合数</th>
                                        <th className="w-60-px">削除</th>
                                    </tr>
                                    {
                                        params.length > 0 ?
                                            params?.map((x, i)=>
                                                <tr className="pointer" key={i}>
                                                    <td>
                                                        <Link to={`/player/goal/detail/${x.id}`}>                                
                                                            {moment(x.created_at).format('YYYY/MM/DD  HH:mm')}
                                                        </Link>
                                                    </td>
                                                    <td>{`${JSON.parse(x.match_list).length}`}</td>
                                                    <td className="p-0">
                                                        <IconButton color="error" size="small">
                                                            <DeleteIcon fontSize="small"/>
                                                        </IconButton>
                                                    </td>
                                                </tr>
                                            )
                                        : <tr><td colSpan="3">入力されたデータがありません。</td></tr>
                                    }
                                </tbody>
                            </table>
                            
                        </div>
                    </>
                }
            </div>
        </div>
    );
}



export default PlayerGoal;