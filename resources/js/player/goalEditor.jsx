

import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react'

// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';

import SendIcon from '@mui/icons-material/Send';

import { Rating, RatingView } from 'react-simple-star-rating'


// ----------------------------------------------------------------------

const  GoalEditor = () => {

    const [long_term_goal,   SetLongTermGoal] = useState('');
    const [medium_term_goal, SetMediumTermGoal] = useState('');
    const [short_term_goal,  SetShortTermGoal] = useState('');

    const [match_list,  setMatchList] = useState([]);
    const [task_list, setTaskList] = useState([]);
    const [train_list, setTrainList] = useState([]);


    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }
    
    useEffect(() => {

        var obj1 = [
            {icon:'/images/icon-mental.svg', content:'',        detail:'技術的な課題1',       value:0,   type:'star5'},
            {icon:'/images/icon-mental.svg', content:'',        detail:'技術的な課題2',       value:0,   type:'star5'},
            {icon:'/images/icon-mental.svg', content:'',        detail:'技術的な課題3',       value:0,   type:'star5'},
            {icon:'/images/icon-mental.svg', content:'',        detail:'フィジカル的な課題1', value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'フィジカル的な課題2', value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'フィジカル的な課題3', value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'メンタル的な課題1',   value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'メンタル的な課題2',   value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'メンタル的な課題3',   value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'戦術的な課題1',       value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'戦術的な課題2',       value:0,   type:'star5' },
            {icon:'/images/icon-mental.svg', content:'',        detail:'戦術的な課題3',       value:0,   type:'star5' }
            ];

        var obj2 = [
            {icon:'/images/icon-mental.svg', content:'勉強時間', detail:'勉強時間',           value:0,   type:'interval' },
            {icon:'/images/icon-mental.svg', content:'腕立て',   detail:'腕立て',            value:0 ,   type:'number' },
            {icon:'/images/icon-mental.svg', content:'腹筋',     detail:'腹筋',              value:0 ,   type:'number' },
            {icon:'/images/icon-mental.svg', content:'背筋',     detail:'背筋',              value:0 ,   type:'number'  },
            {icon:'/images/icon-mental.svg', content:'ストレッチ',detail:'ストレッチ',       value:0,      type:'time'   },
            {icon:'/images/icon-mental.svg', content:'朝食',      detail:'朝食',              value:0 ,   type:'star3'  },
            {icon:'/images/icon-mental.svg', content:'昼食',      detail:'昼食',              value:0 ,   type:'star3'  },
            {icon:'/images/icon-mental.svg', content:'夕食',      detail:'夕食',              value:0 ,   type:'star3'  },
            {icon:'/images/icon-mental.svg', content:'睡眠時間',  detail:'睡眠時間',          value:0,   type:'interval'   }
        
        ]
        setTaskList(obj1);
        setTrainList(obj2);

    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('name', JSON.stringify(name));
        formdata.append('gender', JSON.stringify(gender));
        formdata.append('birth', JSON.stringify(birth));
        formdata.append('height', JSON.stringify(height));
        formdata.append('weight', JSON.stringify(weight));
        formdata.append('school', JSON.stringify(school));
        formdata.append('grade', JSON.stringify(grade));
        formdata.append('phone', JSON.stringify(phone));
        formdata.append('address', JSON.stringify(address));
        formdata.append('lesson', JSON.stringify(lesson));
        formdata.append('career', JSON.stringify(career));
        formdata.append('image', convertimgUri);
        formdata.append('jta_u_18', JSON.stringify(jta_u_18));
        formdata.append('kanto_u_18', JSON.stringify(kanto_u_18));
        formdata.append('rankList', JSON.stringify(rankList));
        formdata.append('title1', JSON.stringify(title1));
        formdata.append('title2', JSON.stringify(title2));

        setSubmit(true)

        document.getElementById('loader').style.display = 'block';
        axios.post('/player/goal/store', formdata)
        .then(response => {
            if(response.data=='success'){
                setSubmit(false);
                window.location.href = '/player/goal';
            }
        })
    }

    const addMatchItem = () => {
        setMatchList([...match_list, { match_date: new Date(), match_name: "", match_goal:'' }]);
    };

    const removeMatchItem = () => {
        const list = [...match_list];
        list.pop();
        setMatchList(list);
    };
    
    const changeMatchItem = (e, index) => {
        const { id, value } = e.target;
        const list = [...match_list];
        list[index][id] = value;
        setMatchList(list);
    };

     

    return (
    <>
    <form  className="needs-validation"  onSubmit={handleSubmit} >
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1  text-white bg-green text-center font-weight-bold">
                <span>選手管理</span>
            </h3>
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
            <div className="px-2 mb-2">
                <div className="text-center mb-1">
                    <img src="/images/icon-minus-black.svg" width="25" className="pointer mr-1" onClick={removeMatchItem}/>
                    <img src="/images/icon-plus-black.svg" width="25" className="pointer" onClick={addMatchItem}/>
                </div>
                <table className="table table-bordered table-success mb-2 text-center">
                    <tbody>
                        <tr>
                            <th>
                                <span>日にち</span>
                            </th>
                            <th>試合名</th>
                            <th style={{width:'100px'}}>
                                <span>目標</span>
                            </th>
                        </tr>
                        {
                            match_list.map((x, i)=>{
                                return(
                                    <tr key={i}>
                                        <td><input type="date" id="match_date" className="w-100 bg-none border-0 text-center hide-calender"  value={x.match_date} onChange={e => changeMatchItem(e, i)} required/></td>
                                        <td><input type="text" id="match_name" className="w-100 bg-none border-0 text-center"  value={x.match_name} onChange={e => changeMatchItem(e, i)} required/></td>
                                        <td>
                                            <select className="bg-none w-100 text-center border-0" id="match_goal" value={x.match_goal} onChange={e => changeMatchItem(e, i)} required>
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
                            })
                        }
                        
                    </tbody>
                </table>
                <table className="table table-bordered table-info mb-2 text-center">
                    <tbody>
                        <tr>
                            <th>長期目標</th>
                            <td><input type="text" name="name" className="w-100 bg-none border-0 text-center" value={long_term_goal} onChange={(e)=>SetLongTermGoal(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <th>中期目標</th>
                            <td><input type="text" name="name" className="w-100 bg-none border-0 text-center" value={medium_term_goal} onChange={(e)=>SetMediumTermGoal(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <th>短期目標</th>
                            <td><input type="text" name="name" className="w-100 bg-none border-0 text-center" value={short_term_goal} onChange={(e)=>SetShortTermGoal(e.target.value)} required /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
            <div className="px-2 mb-2">
                <table className="table table-bordered mb-2">
                    <tbody>
                        {
                            task_list.map((x, i)=>{
                                return(
                                    <tr className="table-success" key={i}>
                                        <th className="text-center"><img src="/images/icon-tech.svg" width="30" height="30" /></th>
                                        <td className="text-center">
                                            <input type="text" name="name" className="w-100 bg-none border-0 text-center" placeholder={x.detail} value={x.content} onChange={(e)=>SetMediumTermGoal(e.target.value)} required />
                                            <Rating onClick={handleRating} ratingValue={rating} stars={5}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

        <div className="mt-3">
            <div className="row">
                <div className="col-6">
                    <Button size="large" color="primary" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '2px solid white'}} onClick={(e)=>window.location.href = '/player/goal'}>キャンセル</Button>
                </div>
                <div className="col-6">
                    <LoadingButton size="large" type="submit" color="primary" fullWidth  variant="contained" style={{backgroundColor: 'transparent', border: '2px solid white'}} endIcon={<SendIcon />}>
                        送信
                    </LoadingButton>
                </div>
            </div>
        </div>
    </form>
    </>
    );
  }

var element = document.querySelector('#goal-editor');
if(element){
    ReactDOM.render(<GoalEditor/>, element);
}

