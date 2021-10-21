import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import moment from 'moment';

import { Rating, RatingView } from 'react-simple-star-rating';


const PlayerMatchPrepare = (props) => {

    const [tournament, setTournament] = useState(null);

    useEffect( () => {
        setTournament(props.tournament);
    }, []);

    // useEffect( ()=>{
    //     console.log(tournament, question_list);
    // }, [tournament, question_list])

    return (
    <div id="prepare mb-5">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'500px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to="/player/match">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                <span>試合情報詳細</span>
                <Link to={`/player/match/prepare/edit/${tournament?.id}`}>
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                        <EditIcon/>
                    </IconButton>
                </Link>
            </h3>
            {
                !tournament &&
                    <p className="mt-5 text-center">登録された資料がありません。</p>
            }
            {
                tournament &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-15 text-white">大会情報</p>
                    <div className="px-2 mb-2">
                        <div className="d-block d-md-flex">
                            <table className="table table-bordered text-center mb-2">
                                <tbody>
                                    <tr className="table-success">
                                        <th rowSpan="2" className="align-middle w-135-px">大会</th>
                                        <td>{tournament.tournament_name}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>{moment(tournament.tournament_date).format('YYYY-MM-DD')}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th>対戦相手</th>
                                        <td>{tournament.opponent_name}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th>クラブ名</th>
                                        <td>{tournament.opponent_club}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-bordered text-center mb-2">
                                <tbody>
                                    <tr className="table-success">
                                        <th className="w-135-px">サーフェス</th>
                                        <td>{tournament.surface}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th>ラウンド</th>
                                        <td>{tournament.round}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <th>天気</th>
                                        <td>
                                            <img src={`/images/icons/icon-${tournament.weather}.svg`} 
                                                alt="weather" 
                                                width="30" 
                                                height="30"
                                            />
                                        </td>
                                    </tr>
                                    <tr className="table-success">
                                        <th>カテゴリー</th>
                                        <td>{tournament.category}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <table className="table table-bordered text-center mb-2">
                            <tbody>
                                <tr className="table-success">
                                    <td>起きた時の体調や気分</td>
                                    <td>
                                        <RatingView stars={5} ratingValue={tournament.mood}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-15 text-white">試合前に心がける事</p>
                    <div className="px-2 mb-2">
                        <table className="table table-bordered text-center mb-0">
                            <tbody>
                                {
                                    JSON.parse(tournament.caution_list)?.map((x, i)=>
                                    <tr key={i}>
                                        <td className="w-40-px"><span>{i+1}</span></td>
                                        <td>{x}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right ft-15 d-flex justify-content-between flex-column flex-sm-row">
                        <span>入力日 : {moment(tournament.created_at).format('YYYY/MM/DD HH:mm')}</span>
                        <span>更新日 : {moment(tournament.updated_at).format('YYYY/MM/DD HH:mm')}</span>
                    </p>

                </>
            }
        </div>
    </div>
    );
}



export default PlayerMatchPrepare;