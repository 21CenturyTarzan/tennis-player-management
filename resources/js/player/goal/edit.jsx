import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';

// material
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Rating, RatingView } from 'react-simple-star-rating';

var g_StageObj = [
    {stage_type:'長期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'長期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'長期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'中期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'中期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'中期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'短期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'短期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
    {stage_type:'短期',  stage_match:'', stage_goal:'勝つ', stage_result:''},
];

var g_TaskObj = [
    {icon:'/images/icons/icon-ball.svg',         task_type:'技術的な課題1',       task_detail:'',         task_rate:0},
    {icon:'/images/icons/icon-ball.svg',         task_type:'技術的な課題2',       task_detail:'',         task_rate:0},
    {icon:'/images/icons/icon-ball.svg',         task_type:'技術的な課題3',       task_detail:'',         task_rate:0},
    {icon:'/images/icons/icon-dumbbell.svg',     task_type:'フィジカル的な課題1', task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-dumbbell.svg',     task_type:'フィジカル的な課題2', task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-dumbbell.svg',     task_type:'フィジカル的な課題3', task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-mental.svg',       task_type:'メンタル的な課題1',   task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-mental.svg',       task_type:'メンタル的な課題2',   task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-mental.svg',       task_type:'メンタル的な課題3',   task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-strategy.svg',     task_type:'戦術的な課題1',       task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-strategy.svg',     task_type:'戦術的な課題2',       task_detail:'',        task_rate:0},
    {icon:'/images/icons/icon-strategy.svg',     task_type:'戦術的な課題3',       task_detail:'',        task_rate:0}
];

// ----------------------------------------------------------------------

const  PlayerGoalEditor = (props) => {

    const history = useHistory();
    const [load, setLoad] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [goal_id, setGoalId] = useState(null);
    const [ok_data, setOKData] = useState(false);
    ////////////////////////////////////////////////////////
    const [stage_list, setStageList] = useState([]);
    const [match_list,  setMatchList] = useState([]);
    const [task_list, setTaskList] = useState([]);
    const [study_start_time, setStudyStartTime] = useState(new Date());
    const [study_end_time, setStudyEndTime] = useState(new Date());

    const [sleep_start_time, setSleepStartTime] = useState(new Date());
    const [sleep_end_time, setSleepEndTime] = useState(new Date());

    const [pushups, setPushups] = useState(0);
    const [pilates, setPilates] = useState(0);
    const [gymnastics, setGymnastics] = useState(0);
    
    const [stretching_hour, setStretchHour] = useState('0時間');
    const [stretching_min, setStretchMin] = useState('00分');

    const [rate_breakfast, setRateBreakfast] = useState(0)
    const [rate_lunch, setRateLunch] = useState(0)
    const [rate_dinner, setRateDinner] = useState(0)
    ///////////////////////////////////////////////////////////////
   
    
    useEffect(() => {

        setLoad(false);
        var params;
        
        var id = Number(document.getElementById('player_id').value);
        axios.get(`/api/player/goal/detail/${props.match.params?.id}`, {params:{player_id: id}})
        .then(async (response)=>{

            setLoad(true);
            if(response.data.status_code == 200){
                params = response.data.params;
                setStudyStartTime(params.study_time_start);
                setStudyEndTime(params.study_time_end);
                setSleepStartTime(params.sleep_time_start);
                setSleepEndTime(params.sleep_time_end);
                setPushups(params.pushups);
                setPilates(params.pilates);
                setGymnastics(params.gymnastics);
                setStretchHour(params.stretching_time.split(' ')[0]);
                setStretchMin(params.stretching_time.split(' ')[1]);
                setRateBreakfast(params.breakfast);
                setRateLunch(params.lunch);
                setRateDinner(params.dinner);
                
                setMatchList(JSON.parse(params.match_list));
                setStageList(JSON.parse(params.stage_list));
                setTaskList(JSON.parse(params.task_list));
                
                setGoalId(params.id);
                setOKData(true);
            }
        });

    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append('stage_list',  JSON.stringify(stage_list));
        formdata.append('match_list', JSON.stringify(match_list));
        formdata.append('task_list',  JSON.stringify(task_list));
        formdata.append('study_start_time', study_start_time);
        formdata.append('study_end_time', study_end_time );
        formdata.append('sleep_start_time', sleep_start_time );
        formdata.append('stretching_time', stretching_hour + ' ' + stretching_min);
        formdata.append('pushups', pushups);
        formdata.append('pilates', pilates);
        formdata.append('gymnastics', gymnastics );
        formdata.append('sleep_end_time', sleep_end_time );
        formdata.append('breakfast', rate_breakfast);
        formdata.append('lunch', rate_lunch);
        formdata.append('dinner', rate_dinner);

        setSubmit(true)

        var id = Number(document.getElementById('player_id').value);
        axios.post(`/api/player/goal/update/${props.match.params?.id}`, formdata, {params:{player_id: id}})
        .then(response => {
            setSubmit(false);
            if(response.data.status_code==200){
                history.push({
                    pathname: `/player/goal/detail/${props.match.params?.id}`,
                    state: {}
                });
            }
        })
    }

    
    const changeMatchItem = (e, index) => {
        const { id, value } = e.target;
        const list = [...match_list];
        list[index][id] = value;
        setMatchList(list);
    };

    const changeTaskItem = (e, index) => {
        const { id, value } = e.target;
        const list = [...task_list];
        list[index][id] = value;
        setTaskList(list);
    }

    const changeTaskItemRate = (rate, index) => {
        const list = [...task_list];
        list[index]['task_rate'] = rate;
        setTaskList(list);
    }

    const changeGoalItem = (e, index) => {
        const { id, value } = e.target;
        const list = [...stage_list];
        list[index][id] = value;
        setStageList(list);
    }

    return (
    <form  className="needs-validation"  onSubmit={handleSubmit}>
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to={`/player/goal/detail/${props.match.params?.id}`} >
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                <span>目標編集</span>
            </h3>
            {
                !load && <CircularProgress style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
            }
            {
                    load && !ok_data &&
                    <>
                        <p className="mt-5 text-center">登録された資料がありません。</p>
                        <Link to="/player/goal/new">
                            <p className="mt-2 text-center">新たに追加するには...</p>
                        </Link>
                    </>
            }
            {
                load && ok_data &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
                    <div className="px-2 mb-2">
                        <table className="table table-bordered table-success mb-2 text-center">
                            <tbody>
                                <tr>
                                    <th>予定日</th>
                                    <th>試合名</th>
                                    <th className="w-100-px">目標</th>
                                </tr>
                                {
                                    match_list.length > 0 ?
                                        match_list.map((x, i)=>
                                            <tr key={i}>
                                                <td><input type="date" id="match_date" className="w-100 bg-none border-0 text-center hide-calender"  value={x.match_date} onChange={e => changeMatchItem(e, i)} required/></td>
                                                <td><input type="text" id="match_name" className="w-100 bg-none border-0 text-center"  value={x.match_name} onChange={e => changeMatchItem(e, i)} required/></td>
                                                <td>
                                                    <select className="bg-none w-100 text-center border-0" id="match_goal" value={x.match_goal} onChange={e => changeMatchItem(e, i)}>
                                                        <option value="勝つ">勝つ</option>
                                                        <option value="優勝">優勝</option>
                                                        <option value="準優勝">準優勝</option>
                                                        <option value="Best4">Best4</option>
                                                        <option value="Best8">Best8</option>
                                                        <option value="Best16">Best16</option>
                                                        <option value="Best32">Best32</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    :  <tr><td colSpan="3">予定された試合はありません。</td></tr>
                                }
                                
                            </tbody>
                        </table>
                        <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">私の目標</p>
                        <table className="table table-bordered table-info mb-2 text-center">
                            <tbody>
                                <tr>
                                    <th className="w-135-px w-xs-60-px"></th>
                                    <th>試合</th>
                                    <th className="w-100-px w-xs-90-px">目標</th>
                                    <th className="w-100-px w-xs-90-px">結果</th>
                                </tr>
                                {
                                    stage_list.map((x, idx)=>
                                        <tr  className={`${idx>=0&&idx<3&&'table-success'} ${idx>=3&&idx<6&&'table-danger'} ${idx>=6&&idx<9&&'table-primary'} ${idx>=9&&idx<12&&'table-success'}`}  key={idx}>
                                            <th className={`${idx%3!=0 && 'd-none'} align-middle`} rowSpan="3">{x.stage_type}<br className="d-block d-sm-none"/>目標</th>
                                            <td><input type="text" name="stage_match" id="stage_match" className="w-100 bg-none border-0 text-center" value={x.stage_match} onChange={e =>changeGoalItem(e, idx)} required /></td>
                                            <td>
                                                <select className="w-100 bg-none text-center border-0" id="stage_goal" value={x.stage_goal} onChange={e => changeGoalItem(e, idx)} >
                                                    <option value="勝つ">勝つ</option>
                                                    <option value="優勝">優勝</option>
                                                    <option value="準優勝">準優勝</option>
                                                    <option value="Best4">Best4</option>
                                                    <option value="Best8">Best8</option>
                                                    <option value="Best16">Best16</option>
                                                    <option value="Best32">Best32</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select className="w-100 bg-none text-center border-0" id="stage_result" value={x.stage_result} onChange={e => changeGoalItem(e, idx)} >
                                                    <option value=""></option>
                                                    <option value="勝つ">勝つ</option>
                                                    <option value="優勝">優勝</option>
                                                    <option value="準優勝">準優勝</option>
                                                    <option value="Best4">Best4</option>
                                                    <option value="Best8">Best8</option>
                                                    <option value="Best16">Best16</option>
                                                    <option value="Best32">Best32</option>
                                                </select>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
                    <div className="px-2 mb-2 d-block d-sm-flex">
                        <div className="w-50 w-sm-100 mb-3 mb-sm-0">
                            {
                                task_list.map((x, i)=>{
                                    return(
                                        <div className="p-1 d-flex justify-content-center border-1" key={i}>
                                            <div className="text-center"><img src={x.icon} width="25" height="25" /></div>
                                            <div className="text-center">
                                                <input type="text" name="task_detail" id="task_detail" className="w-100 bg-none border-0 text-center" placeholder={x.task_type} value={x.task_detail} onChange={(e)=>changeTaskItem(e, i)} required />
                                                <Rating onClick={(rate)=>changeTaskItemRate(rate, i)} ratingValue={x.task_rate} stars={5}/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="w-50 w-sm-100">
                            <table className="table table-bordered mb-2 text-center">
                                <tbody>
                                    <tr>
                                        <td><img src="/images/icons/icon-book.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">勉強時間</p></td>
                                        <td>
                                            <span className="mr-3">開始:</span>
                                                <input type="time" className="border-0 mb-1 w-120-px"
                                                    value={study_start_time} onChange={e=>setStudyStartTime(e.target.value)} required/>
                                                    
                                            <br/>

                                            <span className="mr-3">終了:</span>
                                                <input type="time" className="border-0 w-120-px" 
                                                    value={study_end_time} onChange={e=>setStudyEndTime(e.target.value)} required/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-pushups.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">腕立て</p></td>
                                        <td>
                                            <input type="number" min="0" step="10" className="border-0 text-center" 
                                                value={pushups} onChange={e=>setPushups(e.target.value)} required/> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-pilates.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">腹筋</p></td>
                                        <td>
                                            <input type="number" min="0" step="10" className="border-0 text-center" 
                                                value={pilates} onChange={e=>setPilates(e.target.value)} required/> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-gymnastics.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">背筋</p></td>
                                        <td>
                                            <input type="number" min="0" step="10" className="border-0 text-center" 
                                                value={gymnastics} onChange={e=>setGymnastics(e.target.value)} required/> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-stretching.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">ストレッチ</p></td>
                                        <td>
                                            <select className="border-0" value={stretching_hour} onChange={e=>setStretchHour(e.target.value)}>
                                                <option value="0時間">0時間</option>
                                                <option value="1時間">1時間</option>
                                                <option value="2時間">2時間</option>
                                            </select>
                                            <select className="border-0" value={stretching_min} onChange={e=>setStretchMin(e.target.value)}>
                                                <option value="00分">00分</option>
                                                <option value="05分">05分</option>
                                                <option value="10分">10分</option>
                                                <option value="15分">15分</option>
                                                <option value="20分">20分</option>
                                                <option value="25分">25分</option>
                                                <option value="30分">30分</option>
                                                <option value="35分">35分</option>
                                                <option value="40分">40分</option>
                                                <option value="45分">45分</option>
                                                <option value="50分">50分</option>
                                                <option value="55分">55分</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">朝食</p></td>
                                        <td>
                                            <Rating stars={3} ratingValue={rate_breakfast} onClick={rate=>setRateBreakfast(rate)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">昼食</p></td>
                                        <td>
                                            <Rating stars={3} ratingValue={rate_lunch} onClick={rate=>setRateLunch(rate)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">夕食</p></td>
                                        <td>
                                            <Rating stars={3} ratingValue={rate_dinner} onClick={rate=>setRateDinner(rate)}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="/images/icons/icon-bed.svg" width="25" height="25" /></td>
                                        <td><p className="mb-0 text-center">睡眠時間</p></td>
                                        <td>
                                            <span className="mr-3">開始:</span><input type="time" className="border-0 mb-1 w-120-px" value={sleep_start_time} onChange={e=>setSleepStartTime(e.target.value)} required/><br/>
                                            <span className="mr-3">終了:</span><input type="time" className="border-0 w-120-px" value={sleep_end_time} onChange={e=>setSleepEndTime(e.target.value)} required/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-3 mb-2 px-2 px-md-4">
                        <div className="row">
                            <div className="col-6">
                                <Link to={`/player/goal/detail/${props.match.params?.id}`} style={{textDecoration:'none'}}>
                                    <Button size="large" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '1px solid green', color:'green', fontSize:'16px'}} >
                                        <span>閉じる</span>
                                    </Button>
                                </Link>
                            </div>
                            <div className="col-6">
                                <LoadingButton  type="submit" 
                                    fullWidth  
                                    size="large"
                                    variant="contained" 
                                    endIcon={<SendIcon />}
                                    style={{backgroundColor: 'green', fontSize:'16px'}}
                                    loading={submit}
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


export default PlayerGoalEditor;