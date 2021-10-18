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


function PlayerResultEdit() {
    const [load, setLoad] = useState(false);
    const [tournament, setTournament] = useState(null);
    const [question_list, setQuestionList] = useState(null);
    const [select, setSelect] = useState(false);

    const [scores, setScores] = useState([
        {type:'1set_my_score',  scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
        {type:'2set_my_score',  scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
        {type:'3set_my_score',  scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
        {type:'1set_opp_score', scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
        {type:'2set_opp_score', scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
        {type:'3set_opp_score', scores: [0,0,0,0,0,0,0,0,0,0,0,0], total:0 },
    ]);

   


    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/match', {params:{player_id: id}})
        .then( response=>{

            setLoad(true);
            if(response.data.status_code == 200){
                console.log(response.data);
                setTournament(response.data.params.tournament);
                setQuestionList(response.data.params.question_list);
            }
            else{

            }
        })
    }, []);

    const changeScore = (rate, iy, ix) => {
        const list = [...scores];
        if(rate == 1 && list[iy]['scores'][ix] == 1)
            list[iy]['scores'][ix] = 0;
        else list[iy]['scores'][ix] = rate;
        var sum = 0;
        for(let i=0; i<list[iy]['scores'].length; i++)
            sum += list[iy]['scores'][i];
        list[iy]['total'] = sum;
        setScores(list);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
    <form  className="needs-validation"  onSubmit={handleSubmit}>
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <span>試合結果</span>
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
                            <div>
                            {
                                tournament.caution.map((x, i)=>
                                    <div className="d-block d-sm-flex justify-content-between" key={i}>
                                        <div>{x.caution}</div>
                                        <div><Rating stars={10} ratingValue={5}/></div>
                                    </div>
                                )
                            }
                            </div>
                        } 
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己評価</p>
                        <table className="table table-bordered text-center mb-2">
                            <tbody>
                                <tr>
                                    <td>努力・闘志の評価</td>
                                    <td style={{width: '165px'}}><Rating stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                                <tr>
                                    <td>プレーの自己評価</td>
                                    <td style={{width: '165px'}}><Rating stars={10} size={15} ratingValue={5}/></td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合の流れ</p>
                        <div style={{overflowX:'scroll'}}>
                            <table className="table table-bordered text-center table-success mb-0" id="result-table">
                                <tbody>
                                    <tr>
                                        <th colSpan="2"></th>
                                        <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>T</th>
                                    </tr>
                                    {
                                        scores.map((yItem, iy)=>
                                            <tr key={iy}>
                                                <th rowSpan="2" className={`align-middle ${iy%2==1 && 'd-none'}`}>{iy/2+1}set</th>
                                                <th className="w-60-px">{iy%2==0 ?'自分':'相手'}</th>
                                                {
                                                    yItem.scores.map((xItem, ix)=>
                                                        <td key={ix}>
                                                            <Rating ratingValue={xItem} stars={1} onClick={rate=>changeScore(rate, iy, ix)} style={{color:'green'}}/>
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
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">どんな相手だったか？</p>
                    <div className="px-2 mb-2 pre-scrollable">
                        {
                            question_list?.map((x, i)=>
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" id={`check${i}`} type="checkbox"/>
                                    <label className="form-check-label" htmlFor={`check${i}`}>
                                        {x.question}
                                    </label>
                                </div>
                            )
                        }
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                バックが弱い
                            </label>
                        </div>
                    </div>
                    
                    <div className="mt-3 mb-2 px-2 px-md-4">
                        <div className="row">
                            <div className="col-6">
                                <Link to="/player/result" style={{textDecoration:'none'}}>
                                    <Button size="large" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '1px solid green', color:'green', fontSize:'16px'}} >
                                        <span>閉じる</span>
                                    </Button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <LoadingButton size="large" type="submit" 
                                    fullWidth  
                                    variant="contained" 
                                    endIcon={<SendIcon />}
                                    style={{backgroundColor: 'green', fontSize:'16px'}}
                                    // loading={submit}
                                >
                                    <span>送信</span>
                                </LoadingButton>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    </form>
    );
}



export default PlayerResultEdit;