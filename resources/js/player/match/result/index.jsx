import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import moment from 'moment';

import { Rating, RatingView } from 'react-simple-star-rating';


const PlayerMatchResult = ({tournament}) => {

    const tournament_result = tournament.tournament_result;
    var score_list, 
        about_oppenent,
        tactics,
        improvement,
        check_mental;
    if(tournament_result)
    {
        score_list = JSON.parse(tournament_result.score_list);
        about_oppenent = JSON.parse(tournament_result.about_opponent);
        tactics = JSON.parse(tournament_result.tactics);
        improvement = JSON.parse(tournament_result.improvement);
        check_mental = JSON.parse(tournament_result.check_mental);
    }
        console.log(score_list);
    

    return (
    <div id="result">
        <div className="mt-5 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to="/player/match">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                <span>試合結果詳細</span>
                {
                    tournament_result && 
                        <Link to={`/player/match/result/edit/${tournament?.id}`}>
                            <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                                <EditIcon/>
                            </IconButton>
                        </Link>
                }
            </h3>
            {
                !tournament_result &&
                    <p className="mt-5 text-center">
                        試合結果データが入力されていません。<br/>
                        <Link to={`/player/match/result/new/${tournament?.id}`}><span>試合結果を入力するには...</span></Link>
                    </p>
            }
            {
               tournament_result &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-xs-15 text-white">試合前の課題達成度</p>
                    <div className="px-2 mb-2">
                        <div>
                        {
                            JSON.parse(tournament_result.caution_rate).map((x, i)=>
                                <div className="d-block d-sm-flex justify-content-between mb-1" key={i}>
                                    <div>{x.caution}</div>
                                    <div><RatingView stars={10} ratingValue={x.rate} size={20}/></div>
                                </div>
                            )
                        }
                        </div>
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-xs-15 text-white">自己評価</p>
                        <div className="mb-2">
                            <div className="d-block d-sm-flex justify-content-between mb-1">
                                <div>努力・闘志の評価</div>
                                <div><RatingView stars={10} ratingValue={tournament_result.effort_eval} size={20}/></div>
                            </div>
                            <div className="d-block d-sm-flex justify-content-between">
                                <div>プレーの自己評価</div>
                                <div><RatingView stars={10} ratingValue={tournament_result.play_eval} size={20}/></div>
                            </div>
                        </div>

                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-xs-15 text-white">試合の流れ</p>
                        <div style={{overflowX:'scroll'}}>
                            <table className="table table-bordered text-center table-success mb-0" id="result-table">
                                <tbody>
                                    <tr>
                                        <th colSpan="2"></th>
                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>T</th>
                                    </tr>
                                    {
                                        score_list.map((yItem, iy)=>
                                            <tr key={iy}>
                                                <th rowSpan="2" className={`align-middle ${iy%2==1 && 'd-none'}`}>{iy/2+1}set</th>
                                                <th className="w-60-px">{iy%2==0 ?'自分':'相手'}</th>
                                                {
                                                    yItem.round.map((xItem, ix)=>
                                                        <td key={ix}>
                                                            <RatingView ratingValue={xItem.score} stars={1}/>
                                                        </td>             
                                                    )
                                                }
                                                <th className="w-65-px">{yItem.total}</th>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-xs-15 text-white">どんな相手だったか？</p>
                    <div className="px-2 mb-2">
                        <table className="table table-bordered text-center mb-0">
                            <tbody>
                                {
                                    about_oppenent.length > 0 ?
                                        about_oppenent.map((x, i)=>
                                            <tr key={i}>
                                                <td className="w-40-px"><span>{i+1}</span></td>
                                                <td>{x}</td>
                                            </tr>
                                        )
                                    : <tr><td>相手選手のデータが入力されていません。</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="px-2 mb-2">
                        <table className="table table-bordered table-success mb-2 text-center">
                            <tbody>
                                <tr>
                                    <th className="w-40-px"></th>
                                    <th>再度同じ相手にあたるとしたら、具体的にどう戦うか？</th>
                                </tr>
                                {
                                    tactics.length > 0 ?
                                        tactics.map((x, i)=>
                                            <tr key={i}>
                                                <td className="w-40-px"><span>{i+1}</span></td>
                                                <td>{x}</td>
                                            </tr>
                                        )
                                    : <tr><td colSpan="2">データが入力されていません。</td></tr>
                                }
                                
                            </tbody>
                        </table>

                        <table className="table table-bordered table-success mb-2 text-center">
                            <tbody>
                                <tr>
                                    <th className="w-40-px"></th>
                                    <th>改善すべき内容</th>
                                </tr>
                                {
                                    improvement.length > 0 ?
                                        improvement.map((x, i)=>
                                            <tr key={i}>
                                                <td className="w-40-px"><span>{i+1}</span></td>
                                                <td>{x}</td>
                                            </tr>
                                        )
                                    : <tr><td colSpan="2">データが入力されていません。</td></tr>
                                }
                                
                            </tbody>
                        </table>
                    </div>

                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-xs-15 text-white">試合後のメンタルチェック </p>
                    <div className="mx-2 mb-2">
                        <table className="table mb-2 text-center ft-xs-16">
                            <tbody>
                            {
                                check_mental.map((x, i)=>
                                    <tr key={i}>
                                        <td className="w-40-px" >{i+1}</td>
                                        <td className="text-left">{x.sen1}</td>
                                        <td style={{minWidth:'110px'}}><RatingView stars={5} size={20} ratingValue={x.rate}/></td>
                                        <td className="text-right">{x.sen2}</td>
                                    </tr>
                                )
                            }
                            
                            </tbody>
                        </table>
                    </div>
               
                    <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right ft-xs-15 d-flex justify-content-between flex-column flex-sm-row">
                        <span>入力日 : {moment(tournament_result.created_at).format('YYYY/MM/DD HH:mm')}</span>
                        <span>更新日 : {moment(tournament_result.updated_at).format('YYYY/MM/DD HH:mm')}</span>
                    </p>
                </>
            }
        </div>
    </div>
    );
}



export default PlayerMatchResult;