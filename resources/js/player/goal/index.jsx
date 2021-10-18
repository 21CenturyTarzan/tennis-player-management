import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Rating, RatingView } from 'react-simple-star-rating';

import moment from 'moment';


function PlayerGoal() {
    
    const [load, setLoad] = useState(false);
    const [params, setParams] = useState(null);

    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/goal', {params:{player_id: id}})
        .then(async (response)=>{
            setLoad(true);
            if(response.data.status_code == 200){
                setParams(response.data.params)
            }
        })
    }, []);

    // useEffect(()=>{
    //     console.log(params);
    // },[params])

    const getHHMM = (str) => {
        return str.split(':')[0] +':'+ str.split(':')[1];
    }
    
    return (
        <div id="goal">
            <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
                <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                    <Link to="/player/goal/edit" className="edit edit-left py-1" style={{marginTop:'-5px'}}>
                        <img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30" title="Edit"/>
                    </Link>
                    <span>選手管理</span>
                    <Link to="/player/goal/new" className="edit edit-right py-1" style={{marginTop:'-5px'}}>
                        <img src="/images/icon-add.svg" alt="icon-add.svg" width="30" height="30"title="Add"/>
                    </Link>
                </h3>
                {
                    !load && <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
                }
                {
                    load && !params &&
                        <p className="mt-5 text-center">登録された資料がありません。</p>
                }
                {
                    load && params &&
                    <>
                        <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
                        <div className="px-2 mb-2">
                            <table className="table table-bordered table-success mb-2 text-center">
                                <tbody>
                                    <tr>
                                        <th>日にち</th>
                                        <th>試合名</th>
                                        <th style={{width:'100px'}}>目標</th>
                                    </tr>
                                    {
                                        JSON.parse(params.match_list).length > 0 ?
                                            JSON.parse(params.match_list).map((item, idx)=>
                                                <tr key={idx}>
                                                    <td>{moment(item.match_date).format('YYYY-MM-DD')}</td>
                                                    <td>{item.match_name}</td>
                                                    <td>{item.match_goal}</td>
                                                </tr>
                                            )
                                            : <tr><td colSpan="3">予定された試合はありません。</td></tr>
                                    }
                                </tbody>
                            </table>
                            <p className="w-25 w-md-50 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">私の目標</p>
                            <table className="table table-bordered mb-2 text-center">
                                <tbody>
                                    <tr className="table-secondary">
                                        <th className="w-135-px w-xs-60-px"></th>
                                        <th>試合</th>
                                        <th className="w-100-px w-xs-75-px">目標</th>
                                        <th className="w-100-px w-xs-50-px">結果</th>
                                    </tr>
                                    {
                                        JSON.parse(params.stage_list)?.map((item, idx)=>
                                            <tr className={`${idx>=0&&idx<3&&'table-success'} ${idx>=3&&idx<6&&'table-danger'} ${idx>=6&&idx<9&&'table-primary'}`} key={idx}>
                                                <th className={`${idx%3!=0 && 'd-none'} align-middle`} rowSpan="3">{item.stage_type}<br className="d-block d-sm-none"/>目標</th>
                                                <td>{item.stage_match}</td>
                                                <td>{item.stage_goal}</td>
                                                <td>{item.stage_result}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
                        <div className="px-2 mb-2">
                            <nav className="mb-2">
                                <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-task-tab" data-bs-toggle="tab" data-bs-target="#nav-task" type="button" role="tab">中核的課題</button>
                                    <button className="nav-link" id="nav-extra-tab" data-bs-toggle="tab" data-bs-target="#nav-extra" type="button" role="tab">その他の課題</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-task" role="tabpanel" aria-labelledby="nav-task-tab">
                                    <table className="table table-bordered text-center mb-2">
                                        <tbody>
                                            {
                                                JSON.parse(params.task_list)?.map((item, idx)=>
                                                    <tr 
                                                        // className={`${idx>=0&&idx<3&&'table-success'} 
                                                        //             ${idx>=3&&idx<6&&'table-danger'} 
                                                        //             ${idx>=6&&idx<9&&'table-primary'} 
                                                        //             ${idx>=9&&idx<12&&'table-success'}`} 
                                                        className = "table-success"
                                                        key={idx}
                                                    >
                                                        <td className="w-40-px"><img src={item.icon} width="25" height="25" /></td>
                                                        <td style={{maxWidth:'50px'}}><pre style={{whiteSpace:'nowrap'}}>{item.task_detail}</pre></td>
                                                        <td className="w-95-px">
                                                            <RatingView stars={5} size={15} ratingValue={item.task_rate}/>
                                                        </td>
                                                        <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="nav-extra" role="tabpanel" aria-labelledby="nav-extra-tab">
                                    <table className="mb-2 table table-bordered text-center">
                                        <tbody>
                                            <tr className="table-success">
                                                <td className="w-40-px"><img src="/images/icons/icon-book.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">勉強時間</p></td>
                                                <td>
                                                    {`${getHHMM(params.study_time_start)} ~ ${getHHMM(params.study_time_end)}`}
                                                </td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-pushups.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">腕立て</p></td>
                                                <td>{`${params.pushups} 回`}</td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-pilates.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">腹筋</p></td>
                                                <td>{`${params.pilates} 回`}</td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-gymnastics.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">背筋</p></td>
                                                <td>{`${params.gymnastics} 回`}</td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-stretching.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">ストレッチ</p></td>
                                                <td>{`${params.stretching_time.split(':')[0]}時間  ${params.stretching_time.split(':')[1]}分`}</td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">朝食</p></td>
                                                <td>
                                                    <RatingView stars={3} size={20} ratingValue={params.breakfast}/>
                                                </td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">昼食</p></td>
                                                <td>
                                                    <RatingView stars={3} size={20} ratingValue={params.lunch}/>
                                                </td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-food.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">夕食</p></td>
                                                <td>
                                                    <RatingView stars={3} size={20} ratingValue={params.dinner}/>
                                                </td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                            <tr className="table-success">
                                                <td><img src="/images/icons/icon-bed.svg" width="25" height="25" /></td>
                                                <td><p className="mb-0 text-center">睡眠時間</p></td>
                                                <td>
                                                    {`${getHHMM(params.sleep_time_start)} ~ ${getHHMM(params.sleep_time_end)}`}
                                                </td>
                                                <td className="w-40-px pointer"><img src="/images/icons/icon-graph.svg" width="25" height="25" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : {moment(params.updated_at).format('YYYY/MM/DD HH:mm')}</p>
                    </>
                }
            </div>
        </div>
    );
}



export default PlayerGoal;