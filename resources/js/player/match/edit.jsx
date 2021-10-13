import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import SendIcon from '@mui/icons-material/Send';

import { Rating, RatingView } from 'react-simple-star-rating'


const  PlayerMatchEditor = () => {

    const history = useHistory();

    ///////////////////////////////////////
    const [tournament_name, setTournamentName] = useState('');
    const [tournament_date, setTournamentDate] = useState(new Date());
    const [opponent_name, setOpponentName] = useState('');
    const [opponent_club, setClub] = useState('');
    const [surface, setSurface] = useState('');      //クレー/オムニ/ハード
    const [round, setRound] = useState('');            //本戦/予選
    const [weather, setWeather] = useState('');      //晴/曇/雨
    const [category, setCategory] = useState('');    //U34
    const [caution_list, setCautionList] = useState([]);

   
    useEffect(() => {


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
        formdata.append('caution_list', JSON.stringify(caution_list));
       
        // setSubmit(true)

        // document.getElementById('loader').style.display = 'block';
        // axios.post('player/match/store', formdata)
        // .then(response => {
        //     if(response.data=='success'){
        //         setSubmit(false);
        //         window.location.href = '/home';
        //     }
        // })
    }

    const handleAddCaution = () => {
        setCautionList([...caution_list, ""]);
    };

    const handleRemoveCaution = index => {
        const list = [...caution_list];
        list.pop();
        setCautionList(list);
    };

    const handleChangeCaution = (e, index) => {
        const list = [...caution_list];
        list[index] = e.target.value;
        setCautionList(list);
    };

     

    return (
    <>
    <form  className="needs-validation"  onSubmit={handleSubmit} >
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                <span>試合前準備</span>
            </h3>
            
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">大会情報</p>
            <div className="px-2 mb-2">
                <div className="d-block d-md-flex">
                    <table className="table table-bordered text-center mb-2">
                        <tbody>
                            <tr className="table-success">
                                <td>大会名</td>
                                <td>
                                    <input type="text" value={tournament_name} onChange={e=>setTournamentName(e.target.value)}/>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>大会日にち</td>
                                <td>2021-2-19</td>
                            </tr>
                            <tr className="table-success">
                                <td>対戦相手</td>
                                <td>浮田　愛未</td>
                            </tr>
                            <tr className="table-success">
                                <td>クラブ名</td>
                                <td>Manchester</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-bordered text-center mb-2">
                        <tbody>
                            <tr className="table-success">
                                <td>サーフェス</td>
                                <td>クレー/オムニ/ハード</td>
                            </tr>
                            <tr className="table-success">
                                <td>ラウンド</td>
                                <td>本戦/予選</td>
                            </tr>
                            <tr className="table-success">
                                <td>天気</td>
                                <td>晴/曇/雨</td>
                            </tr>
                            <tr className="table-success">
                                <td>カテゴリー</td>
                                <td>U34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table className="table table-bordered text-center mb-2">
                    <tbody>
                        <tr className="table-success">
                            <td>起きた時の体調や気分</td>
                            <td><img src="/images/star5.svg" alt=""/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">自己分析</p>
            <div className="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">試合前に心がける事</p>
            <div className="px-2 mb-2">
                I dont know here exactly? Can you explain about this section?
            </div>

            <div className="mt-3 mb-2 px-4">
                <div className="row">
                    <div className="col-12 col-sm-6 mb-2">
                        <Button size="large" color="primary" 
                            fullWidth variant="contained" 
                            style={{backgroundColor: 'transparent', border: '1px solid green', color:'green'}} 
                            onClick={ e =>
                                history.push({
                                    pathname: '/player/match',
                                    state: {}
                                })
                            }>
                            キャンセル
                        </Button>
                    </div>
                    <div className="col-12 col-sm-6">
                        <LoadingButton size="large" type="submit" 
                            color="primary" fullWidth  
                            variant="contained" 
                            endIcon={<SendIcon />}
                            style={{backgroundColor: 'green'}}
                            // loading={submit}
                        >
                            送信
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </div>

    </form>
    </>
    );
  }

// var element = document.querySelector('#match-editor');
// if(element){
//     ReactDOM.render(<MatchEditor/>, element);
// }

export default PlayerMatchEditor;
