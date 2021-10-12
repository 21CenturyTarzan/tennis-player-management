import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import SendIcon from '@mui/icons-material/Send';

import { Rating, RatingView } from 'react-simple-star-rating'


// ----------------------------------------------------------------------

const  PlayerMatchEditor = () => {

    const history = useHistory();
   
    useEffect(() => {


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
        axios.post('player/match/store', formdata)
        .then(response => {
            if(response.data=='success'){
                setSubmit(false);
                window.location.href = '/home';
            }
        })
    }

    const handleAddRank = () => {
        setRankList([...rankList, { rankType: "", rankValue: "" }]);
    };

    const handleRemoveRank = index => {
        const list = [...rankList];
        list.pop();
        setRankList(list);
    };

    const handleDeleteRank = (e, index) => {
        console.log(index);
        const list = [...rankList];
        list.splice(index, 1);
        setRankList(list);
    }

    const handleReloadRank = () => {
        setDefaultRank(age);
    }
    
    const handleInputRankChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...rankList];
        list[index][name] = value;
        setRankList(list);
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
                                <td>Tokyo Olympic Games</td>
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
