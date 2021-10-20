import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import { Rating, RatingView } from 'react-simple-star-rating';


function PlayerMatchResult(props) {

    const [tournament, setTournament] = useState(null);

    useEffect( () => {
        setTournament(props.tournament);
    }, []);

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
                <Link to={`/player/match/edit/${props.id}`}>
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
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-15 text-white">試合前の課題達成度</p>
                    <div className="px-2 mb-2">
                        {
                            tournament.caution &&
                            <div>
                            {
                                tournament.caution.map((x, i)=>
                                    <div className="d-block d-sm-flex justify-content-between" key={i}>
                                        <div>{x.caution}</div>
                                        <div><RatingView stars={10} ratingValue={5}/></div>
                                    </div>
                                )
                            }
                            </div>
                        } 
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-15 text-white">自己評価</p>
                        <table className="table table-bordered text-center mb-2">
                            <tbody>
                                <tr>
                                    <td>努力・闘志の評価</td>
                                    <td style={{width: '165px'}}><RatingView stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                                <tr>
                                    <td>プレーの自己評価</td>
                                    <td style={{width: '165px'}}><RatingView stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 ft-15 text-white">試合の流れ</p>
                        <div style={{overflowX:'scroll'}}>
                            <table className="table table-bordered text-center table-success mb-0" id="result-table">
                                <tbody>
                                    <tr>
                                        <th colSpan="2"></th>
                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>T</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2" className="align-middle">1set</th>
                                        <th>自分</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                    <tr>
                                        <th>相手</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2" className="align-middle">2set</th>
                                        <th>自分</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                    <tr>
                                        <th>相手</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                    <tr>
                                        <th rowSpan="2" className="align-middle">3set</th>
                                        <th>自分</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                    <tr>
                                        <th>相手</th>
                                        <td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td><td>15</td>
                                        <th>350</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
               
                    <p className="w-100 p-1 pl-2 mb-2 bg-black-4 ft-15  text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
                </>
            }
        </div>
    </div>
    );
}



export default PlayerMatchResult;