import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import moment from 'moment';
import { Rating, RatingView } from 'react-simple-star-rating';
import CircularProgress from '@material-ui/core/CircularProgress';


function PlayerMatch() {
    const [load, setLoad] = useState(false);
    const [question_list, setQuestionList] = useState(null);
    const [tournament, setTournament] = useState(null);

    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/match', {params:{player_id: id}})
        .then( response=>{
            if(response.data.status_code == 200){
                setLoad(true);
                setTournament(response.data.params.tournament);
                setQuestionList(response.data.params.question_list);
            }
        })
    }, []);

    // useEffect( ()=>{
    //     console.log(tournament, question_list);
    // }, [tournament, question_list])

    return (
    <div id="prepare">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'500px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to="/player/match/edit" className="edit edit-left py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30" title="Edit"/>
                </Link>
                <span  className="ft-25">試合前準備</span>
                <Link to="/player/match/new" className="edit edit-right py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-add.svg" alt="icon-add.svg" width="30" height="30"title="Add"/>
                </Link>
            </h3>
            {
                !load && 
                    <CircularProgress color="secondary" 
                        style={{top:'calc(40vh - 22px)', 
                        left:'calc(50% - 22px)', 
                        color:'green', position:'absolute'}}
                    />
            }
            {
                load && !tournament &&
                    <p className="mt-5 text-center">登録された資料がありません。</p>
            }
            {
                load && tournament &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">大会情報</p>
                    <div className="px-2 mb-2">
                        <div className="d-block d-md-flex">
                            <table className="table table-bordered text-center mb-2">
                                <tbody>
                                    <tr className="table-success">
                                        <td rowSpan="2" className="align-middle">大会</td>
                                        <td>{tournament.tournament_name}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>{moment(tournament.tournament_date).format('YYYY-MM-DD')}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>対戦相手</td>
                                        <td>{tournament.opponent_name}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>クラブ名</td>
                                        <td>{tournament.opponent_club}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-bordered text-center mb-2">
                                <tbody>
                                    <tr className="table-success">
                                        <td>サーフェス</td>
                                        <td>{tournament.surface}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>ラウンド</td>
                                        <td>{tournament.round}</td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>天気</td>
                                        <td>
                                            <img src={`/images/icons/icon-${tournament.weather}.svg`} 
                                                alt="weather" 
                                                width="30" 
                                                height="30"
                                            />
                                        </td>
                                    </tr>
                                    <tr className="table-success">
                                        <td>カテゴリー</td>
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

                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己分析</p>
                    <div className="px-2 mb-2 pre-scrollable">
                        {
                            question_list ? 
                            <table className="table table-bordered text-center">
                                <tbody>
                                    {
                                        question_list.map((x, i)=>
                                        <tr key={i}>
                                            <td className="w-40-px"><span>{i+1}</span></td>
                                            <td>{x.question}</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            :<CircularProgress color="secondary" 
                                style={{top:'calc(50vh - 22px)', left:'calc(50% - 22px)', 
                                color:'green', position:'absolute'}}
                            />
                        }
                    </div>

                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合前に心がける事</p>
                    <div className="px-2 mb-2">
                        {
                            tournament.caution &&
                            <table className="table table-bordered text-center">
                                <tbody>
                                    {
                                        tournament.caution.map((x, i)=>
                                        <tr key={i}>
                                            <td className="w-40-px"><span>{i+1}</span></td>
                                            <td>{x.caution}</td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        }
                    </div>

                    <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : {moment(tournament.updated_at).format('YYYY/MM/DD HH:mm')}</p>
                </>
        }
        </div>
    </div>
    );
}



export default PlayerMatch;