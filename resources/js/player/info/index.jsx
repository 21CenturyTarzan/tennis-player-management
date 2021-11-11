import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';

import moment from 'moment';
import { LoadingButton } from '@material-ui/lab';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

function PlayerInfo() {
    
    const [player, setPlayer] = useState(null);

    useEffect( () => {
        var id = Number(document.getElementById('player_id').value);
         axios.get('/api/player/info', {params:{player_id: id}})
        .then(async (response)=>{
            if(response.data.status_code == 200){
                setPlayer(response.data.params);
            }
        })
    }, []);

    const calculateAge = (birth, today) => {
        let age = today.getFullYear() - new Date(birth).getFullYear();
        return age;
    }


    if(!player) return(<CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'#F0DE00', position:'absolute'}}/>);
    return (
    <div id="info">
        <div className="mt-3 pt-2 rounded-top-15 text-white player-main-info">
            <div className="name pt-3 pt-md-5 ">
                <p className="text-center bg-red-4 font-weight-bold">
                    { player.account.name }
                    <Link to="/player/info/edit" className="edit edit-right">
                        <img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30" title="Edit"/>
                    </Link>
                </p>
            </div>
            <div className="mt-3 mt-md-5">
                <div className="row mx-0">
                    <div className="col-md-4 text-center text-md-right">
                        <div className="m-auto ml-md-auto m-md-0 border-1 avatar-wrapper">
                            <img src={player.account.img} alt="avatar" className="avatar"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="text-center bg-black-4 ft-30 ft-sm-20 m-1 mt-3 m-md-0 my-md-3" style={{overflowX:'hidden'}}>
                            { player.title1 ? player.title1 : <span>私の目標は○○！！</span> }  
                        </p>
                        <p className="text-center bg-black-4 ft-30 ft-sm-20  m-1 m-md-0 my-md-3" style={{overflowX:'hidden'}}>
                            { player.title2 ? player.title2 : <span>誰々に勝ちたい！！</span> } 
                        </p>
                    </div>
                </div>
            </div>
            <div className="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                <table className="table m-0 p-1 text-white text-center">
                    <tbody>
                        <tr>
                            <td className="col-4 border-0">
                                <p className="hint"> { moment(player.birth).format('YYYY/MM/DD') }</p>
                                <p className="value">{calculateAge(player.birth, new Date())}<span>歳</span></p>
                            </td>
                            <td className="col-4 border-0">
                                <p className="hint">Height</p>
                                <p className="value">{player.height}<span>cm</span></p>
                            </td>
                            <td className="col-4 border-0">
                                <p className="hint">Weight</p>
                                <p className="value">{player.weight}<span>kg</span></p>
                            </td>
                        </tr>
                        <tr>    
                            <td className="col-4 border-0">
                                <p className="hint">U18</p>
                                {
                                    player.kanto_u_18 ? <p className="value">{player.kanto_u_18}<span>位</span></p>
                                        : <p className="value">-</p>
                                }
                            </td>
                            <td className="col-4 border-0">
                                <p className="hint">2021 W-L</p>
                                <p className="value">40-4</p>
                            </td>
                            <td className="col-4 border-0">
                                <p className="hint">勝率</p>
                                <p className="value">64<span>%</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>    
            </div>
        </div>

        <div className="row mt-4 mx-0">
            <div className="col-md-6">
                <div className="p-2 shadow-lg bg-black-4">
                    <h5 className="text-center text-white">勝率</h5>
                    <table className="table table-bordered m-0 p-1 text-white text-center">
                        <thead>
                            <tr>
                                <td className="bg-white-2">区分</td>
                                <td className="bg-white-2">W-L</td>
                                <td className="bg-white-2">%</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1set</td>
                                <td>10-5</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>3set</td>
                                <td>90-10</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>オムニコート</td>
                                <td>10-1</td>
                                <td>90</td>
                            </tr>
                            <tr>
                                <td>ハードコート</td>
                                <td>10-10</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>クレーコート</td>
                                <td>10-5</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>20-4</td>
                                <td>33.3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
                <div className="p-2 shadow-lg bg-black-4">
                    <h5 className="text-center text-white">RANK</h5>
                    <table className="table table-bordered m-0 p-1 text-white text-center">
                        <thead>
                            <tr>
                                <td className="bg-white-2">区分</td>
                                <td className="bg-white-2">位</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JTAU18</td>
                                <td>
                                {
                                    player.jta_u_18 ? 
                                        <span>{player.jta_u_18}</span> : 
                                        <span>-</span>
                                }
                                </td>
                            </tr>
                            <tr>
                                <td>関東U18</td>
                                <td>
                                {
                                    player.kanto_u_18 ? 
                                        <span>{player.kanto_u_18}</span> : 
                                        <span>-</span>
                                }
                                </td>
                            </tr>
                            {
                                JSON.parse(player.rank_list)?.map((item, idx)=>(
                                    <tr key={idx}>
                                        <td>{item.rankType}</td>
                                        <td>{item.rankValue}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    
        <div className="mt-4 p-2 shadow-lg bg-black-4">
            <h5 className="text-center text-white">個人情報</h5>
            <table className="table table-bordered m-0 text-white text-center" id="person-info">
                <tbody>
                    <tr>
                        <th>性別</th>
                        <td>{player.gender}</td>
                    </tr>
                    <tr>
                        <th>生年月日</th>
                        <td>{moment(player.birth).format('MM月DD日YYYY年')}</td>
                    </tr>
                    <tr>
                        <th>学校</th>
                        <td>{player.school}</td>
                    </tr>
                    <tr>
                        <th>学年</th>
                        <td>{player.grade}</td>
                    </tr>
                    <tr>
                        <th>郵便番号</th>
                        <td>{player.phone}</td>
                    </tr>
                    <tr>
                        <th>住所</th>
                        <td>{player.address}</td>
                    </tr>
                    <tr>
                        <th>受講回数</th>
                        <td>{player.lesson}</td>
                    </tr>      
                    <tr>
                        <th>主な戦績</th>
                        <td>
                            <pre className="text-left pre-scrollable">{player.career}</pre>
                        </td>
                    </tr>                   
                </tbody>
            </table>
        </div>
    </div>
    );
}



export default PlayerInfo;