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
    const [submit, setSubmit] = useState(false);

    //////////////////////////////////////////////////
    const [tournament, setTournament] = useState(null);
    const [question_list, setQuestionList] = useState(null);

    const [score_list, setScoreList] = useState([
        {type:'1set_mine',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] },
        {type:'1set_opp',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] },
        {type:'2set_mine',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] },
        {type:'2set_opp',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] },
        {type:'3set_mine',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] },
        {type:'3set_opp',  total:0, round:[
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''},
            {score:0, keyGame:false, comment:''}
        ] }
    ]);

    const [caution_rate, setCautionRate] = useState([]);            //Object( {caution:'', rate:0})  //試合前の課題達成度
    const [effort_eval, setEffortEval] = useState(0);               //努力・闘志の評価
    const [play_eval, setPlayEval] = useState(0);                   //プレーの自己評価
    const [about_opponent, setAboutOpponent] = useState([]);        //どんな相手だったか？
    const [tactics, setTactics] = useState(['','','']);            //再度同じ相手にあたるとしたら、具体的にどう戦うか？上をふまえて
    const [improvement, setImprovement] = useState(['','','']);     //改善すべき内容
    const [check_mental, setCheckMental] = useState([                  //試合後のメンタルチェック
        {sen1:'最高のプレーができた',           rate:0, sen2:'最悪のプレーだった'},
        {sen1:'体（筋肉）はリラックスしていた',  rate:0, sen2:'体（筋肉）は緊張していた'},
        {sen1:'不安はなかった',                 rate:0, sen2:'とても不安だった'},
        {sen1:'落ち着いて冷静だった',            rate:0, sen2:'混乱し動揺していた'},
        {sen1:'積極的、楽観的な考え方をしていた', rate:0, sen2:'消極的、悲観的な考えをしていた'},
        {sen1:'挑戦する事を楽しんでいた',        rate:0, sen2:'意欲やエネルギーが不足していた'},
        {sen1:'自動的、本能的にプレーしていた',   rate:0, sen2:'意識が先走って指図しすぎていた'},
        {sen1:'プレーに集中できた',              rate:0, sen2:'集中していなかった'},
        {sen1:'注意力が鋭かった',                rate:0, sen2:'注意力が散漫だった'},
        {sen1:'ポジティブなエネルギーに満ちていた', rate:0, sen2:'ネガティブなエネルギーだらけだった'},
        {sen1:'自信満々だった',                 rate:0, sen2:'自信がなかった'},
        {sen1:'自己コントロールができていた',    rate:0, sen2:'自分をコントロールできなかった'}
    ])

    //////////////////////////////////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('caution_rate', caution_rate);
        formdata.append('effort_eval', effort_eval);
        formdata.append('play_eval', play_eval);
        formdata.append('tactics', tactics);
        formdata.append('improvement', improvement);
        formdata.append('check_mental', check_mental);

        for(let i=0; i<question_list.length; i++)
        {
            if(document.getElementById('check'+i).value == true)
                console.log(question_list[i])
                // setAboutOpponent([...about_opponent, question_list[i]]);
        }
        console.log(about_opponent);

        setSubmit(true)
    }


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

                var arr = [];
                var caution_list = JSON.parse(response.data.params.tournament.caution_list);
                for(let i=0; i<caution_list.length; i++)
                    arr.push({caution:caution_list[i], rate:0});
                setCautionRate(arr);
            }
        })
    }, []);

    const changeScore = (rate, iy, ix) => {
        const list = [...score_list];
        if(rate == 1 && list[iy]['round'][ix]['score'] == 1)
            list[iy]['round'][ix]['score'] = 0;
        else list[iy]['round'][ix]['score'] = rate;
        var sum = 0;
        for(let i=0; i<list[iy]['round'].length; i++)
            sum += list[iy]['round'][i]['score'];
        list[iy]['total'] = sum;
        setScoreList(list);
    }

    const changeCautionRate = (rate, ix) => {
        const list = [...caution_rate];
        list[ix]['rate'] = rate;
        setCautionRate(list);
    }

    const changeTactics = (e, ix) => {
        const list = [...tactics];
        list[ix] = e.target.value;
        setTactics(list);
    }

    const changeImprovement = (e, ix) => {
        const list = [...improvement];
        list[ix] = e.target.value;
        setImprovement(list);
    }

    const changeCheckMental = (rate, ix) => {
        const list = [...check_mental];
        list[ix]['rate'] = rate;
        setCheckMental(list);
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
                        <table className="table text-left mb-2 ft-sm-16">
                            <tbody>
                            {
                                caution_rate?.map((x, i)=>
                                    <tr key={i}>
                                        <td className="w-40-px text-center" >{i+1}</td>
                                        <td>{x.caution}</td>
                                        <td style={{width: '210px'}}><Rating stars={10} size={20} ratingValue={x.rate} onClick={rate=>changeCautionRate(rate, i)}/></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己評価</p>
                        <table className="table text-left mb-2 ft-sm-16">
                            <tbody>
                                <tr>
                                    <td>努力・闘志の評価</td>
                                    <td style={{width: '210px'}}><Rating stars={10} size={20} ratingValue={effort_eval} onClick={rate=>setEffortEval(rate)}/></td>
                                </tr>
                                <tr>
                                    <td>プレーの自己評価</td>
                                    <td style={{width: '210px'}}><Rating stars={10} size={20} ratingValue={play_eval} onClick={rate=>setPlayEval(rate)}/></td>
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
                                        score_list.map((yItem, iy)=>
                                            <tr key={iy}>
                                                <th rowSpan="2" className={`align-middle ${iy%2==1 && 'd-none'}`}>{iy/2+1}set</th>
                                                <th className="w-60-px">{iy%2==0 ?'自分':'相手'}</th>
                                                {
                                                    yItem.round.map((xItem, ix)=>
                                                        <td key={ix}>
                                                            <Rating ratingValue={xItem.score} stars={1} onClick={rate=>changeScore(rate, iy, ix)} style={{color:'green'}}/>
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
                    <div className="mx-2 mb-2 py-2 pl-3 pre-scrollable border">
                        {
                            question_list?.map((x, i)=>
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" id={`check${i}`} type="checkbox"/>
                                    <label className="form-check-label pointer" htmlFor={`check${i}`}>
                                        {x.question}
                                    </label>
                                </div>
                            )
                        }
                    </div>
                    <div className="px-2 mb-2">
                        <table className="table table-bordered table-success mb-2 text-center">
                            <tbody>
                                <tr>
                                    <th className="w-40-px"></th>
                                    <th>再度同じ相手にあたるとしたら、具体的にどう戦うか？上をふまえて</th>
                                </tr>
                                {
                                    tactics.map((x, i)=>
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td><input type="text" id="match_name" className="w-100 bg-none border-0 text-center"  value={x} onChange={e => changeTactics(e, i)} required/></td>
                                        </tr>
                                    )
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
                                    improvement.map((x, i)=>
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td><input type="text" id="match_name" className="w-100 bg-none border-0 text-center"  value={x} onChange={e => changeImprovement(e, i)} required/></td>
                                        </tr>
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>

                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合後のメンタルチェック </p>
                    <div className="mx-2 mb-2">
                        <table className="table mb-2 text-center ft-sm-16">
                            <tbody>
                            {
                                check_mental.map((x, i)=>
                                    <tr key={i}>
                                        <td className="w-40-px" >{i+1}</td>
                                        <td className="text-left">{x.sen1}</td>
                                        <td style={{minWidth:'110px'}}><Rating stars={5} size={20} ratingValue={x.rate} onClick={rate=>changeCheckMental(rate, i)}/></td>
                                        <td className="text-right">{x.sen2}</td>
                                    </tr>
                                )
                            }
                            
                            </tbody>
                        </table>
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