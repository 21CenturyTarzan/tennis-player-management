

import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react'

// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';

import SendIcon from '@mui/icons-material/Send';

import { Rating, RatingView } from 'react-simple-star-rating'


// ----------------------------------------------------------------------

const  PlayerResultNew = () => {

    const [long_term_goal,   SetLongTermGoal] = useState('');
    const [medium_term_goal, SetMediumTermGoal] = useState('');
    const [short_term_goal,  SetShortTermGoal] = useState('');

    const [match_date,  setMatchDate] = useState(new Date());

    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }
    
    useEffect(() => {


    }, []);

    const setDefaultRank = function(age){
        let arr = [];
        arr.push({'rankType': 'ITF', 'rankValue':''});
        arr.push({'rankType': 'JTAU'+age, 'rankValue':''});
        arr.push({'rankType': '関東U'+age, 'rankValue':''});
        arr.push({'rankType': '埼玉U'+age, 'rankValue':''});
        arr.push({'rankType': 'School', 'rankValue':''});
        setRankList(arr);
    }

  
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
        axios.post('/player/result/store', formdata)
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
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold">試合結果</h3>
            
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            


            <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>

        <div className="mt-3">
            <div className="row">
                <div className="col-6">
                    <Button size="large" color="primary" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '2px solid white'}} onClick={e=>window.location.href = '/player/result'}>キャンセル</Button>
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

// var element = document.querySelector('#result-editor');
// if(element){
//     ReactDOM.render(<ResultEditor/>, element);
// }

export default PlayerResultNew;