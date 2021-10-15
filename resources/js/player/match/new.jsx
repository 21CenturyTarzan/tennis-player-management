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

import { Rating, RatingView } from 'react-simple-star-rating'


const  PlayerMatchNew = () => {

    const history = useHistory();
    const [submit, setSubmit] = useState(false);

    ///////////////////////////////////////
    const [tournament_name, setTournamentName] = useState('');
    const [tournament_date, setTournamentDate] = useState(new Date());
    const [opponent_name, setOpponentName] = useState('');
    const [opponent_club, setClub] = useState('');
    const [surface, setSurface] = useState('クレー');      //クレー/オムニ/ハード
    const [round, setRound] = useState('予選');            //予選/本戦
    const [weather, setWeather] = useState('sunny');      //晴/曇/雨
    const [category, setCategory] = useState('ITF');    //U34
    const [mood, setMood] = useState(0);
    const [caution_list, setCautionList] = useState(['','','']);
    const [question_list, setQuestionList] = useState([]);

   
    useEffect(() => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        setTournamentDate(date);

        var id = Number(document.getElementById('player_id').value);

        axios.get('/api/player/match', {params:{player_id: id}})
        .then(res=>{
            if(res.data.status_code == 200)
            {
                console.log(res.data.params);
                setQuestionList(res.data.params.question_list);
            }
        })
    }, []);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('tournament_name', tournament_name);
        formdata.append('tournament_date', tournament_date);
        formdata.append('opponent_name', opponent_name);
        formdata.append('opponent_club', opponent_club);
        formdata.append('surface', surface);
        formdata.append('round', round);
        formdata.append('weather', weather);
        formdata.append('category', category);
        formdata.append('mood', mood);
        formdata.append('caution_list', JSON.stringify(caution_list));
       
        setSubmit(true)

        axios.post('/player/match/store', formdata)
        .then(response => {
            if(response.data.status_code == 200){
                setSubmit(false);
                history.push({
                    pathname: '/player/match',
                    state: {}
                });
            }
        })
    }

    const handleAddCaution = () => {
        setCautionList([...caution_list, ""]);
    };

    const handleRemoveCaution = index => {
        const list = [...caution_list];
        if(list.length <= 3) return;
        list.pop();
        setCautionList(list);
    };

    const handleChangeCaution = (e, index) => {
        const list = [...caution_list];
        list[index] = e.target.value;
        setCautionList(list);
    };

     

    return (
    <form  className="needs-validation"  onSubmit={handleSubmit} >
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                <span>試合前準備追加</span>
            </h3>
            
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">大会情報</p>
            <div className="px-2 mb-2">
                <div className="d-block d-md-flex">
                    <table className="table table-bordered text-center mb-2">
                        <tbody>
                            <tr className="table-success">
                                <td rowSpan="2" className="align-middle">大会</td>
                                <td>
                                    <input type="text" className="w-100 bg-none border-0 text-center" placeholder="大会名"  value={tournament_name} onChange={e => setTournamentName(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>
                                    <input type="date" className="w-100 bg-none border-0 text-center"  value={tournament_date} onChange={e => setTournamentDate(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>対戦相手</td>
                                <td>
                                    <input type="text" className="w-100 bg-none border-0 text-center"  value={opponent_name} onChange={e => setOpponentName(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>クラブ名</td>
                                <td>
                                    <input type="text" className="w-100 bg-none border-0 text-center"  value={opponent_club} onChange={e => setClub(e.target.value)} required/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-bordered text-center mb-2">
                        <tbody>
                            <tr className="table-success">
                                <td>サーフェス</td>
                                <td>
                                    <select className="bg-none w-100 text-center border-0" onChange={e => setSurface(e.target.value)}>
                                        <option value="クレー">クレー</option>
                                        <option value="オムニ">オムニ</option>
                                        <option value="ハード">ハード</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>ラウンド</td>
                                <td>
                                    <select className="bg-none w-100 text-center border-0" onChange={e => setRound(e.target.value)}>
                                        <option value="予選">予選</option>
                                        <option value="本戦">本戦</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>天気</td>
                                <td>
                                    <select className="bg-none w-100 text-center border-0" onChange={e => setWeather(e.target.value)}>
                                        <option value="sunny">晴</option>
                                        <option value="cloudy">曇</option>
                                        <option value="rainy">雨</option>
                                    </select>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>カテゴリー</td>
                                <td>
                                    <select className="bg-none w-100 text-center border-0" onChange={e => setCategory(e.target.value)}>
                                        <option value="ITF">ITF</option>
                                        <option value="JTAU18">JTAU18</option>
                                        <option value="関東U18">関東U18</option>
                                        <option value="JTAU24">JTAU24</option>
                                        <option value="関東U24">関東U24</option>
                                        <option value="埼玉U24">埼玉U24</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table className="table table-bordered text-center mb-2">
                    <tbody>
                        <tr className="table-success">
                            <td>起きた時の体調や気分</td>
                            <td>
                                <Rating ratingValue={mood} stars={5} onClick={(rate)=>setMood(rate)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己分析</p>
            <div className="px-2 mb-2 pre-scrollable">
                {
                    question_list.length > 0 ? 
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

            <p className="w-50 w-md-75 p-1 pl-2 mb-0 bg-black-4 rounded-right-20 text-white">試合前に心がける事</p>
            <div className="px-2 mb-2">
                <IconButton onClick={handleRemoveCaution}>
                    <RemoveIcon fontSize="small"/>
                </IconButton>
                <IconButton className="float-right" onClick={handleAddCaution}>
                    <AddIcon fontSize="small"/>
                </IconButton>
                <table className="table table-bordered table-success mb-2 text-center">
                    <tbody>
                        <tr>
                            <th className="w-40-px"></th>
                            <th>心がける事</th>
                        </tr>
                        {
                            caution_list.map((x, i)=>
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td><input type="text" id="match_name" className="w-100 bg-none border-0 text-center"  value={x} onChange={e => handleChangeCaution(e, i)} required/></td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>

            <div className="mt-3 mb-2 px-2 px-md-4">
                <div className="row">
                    <div className="col-6">
                        <Link to="/player/match" style={{textDecoration:'none'}}>
                            <Button size="large" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '1px solid green', color:'green', fontSize:'16px'}} >
                                <span>キャンセル</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="col-6">
                        <LoadingButton size="large" type="submit" 
                            color="primary" fullWidth  
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
        </div>
    </form>
    );
  }


export default PlayerMatchNew;
