

import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react'

// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';

import ImageCrop from 'react-image-crop-component';

import 'react-image-crop-component/style.css';

import SendIcon from '@mui/icons-material/Send';


// ----------------------------------------------------------------------

const  GoalEditor = () => {

   
    
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
        axios.post('/info/store', formdata)
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
        <div class="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 class="mt-2 p-1  text-white bg-green text-center font-weight-bold">
                <span>選手管理</span>
            </h3>
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">近日予定の試合</p>
            <div class="px-2 mb-2">
                <table class="table table-bordered table-success mb-2">
                    <thead>
                        <tr>
                            <th scope="col">日にち</th>
                            <th scope="col">試合名</th>
                            <th scope="col">目標</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>2018-10-29</th>
                            <td>Olymipic</td>
                            <td>1位</td>
                        </tr>
                        <tr>
                            <th>2018-10-29</th>
                            <td>Olymipic</td>
                            <td>1位</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-bordered table-info mb-2">
                    <tbody>
                        <tr>
                            <th>長期目標</th>
                            <td>2位</td>
                        </tr>
                        <tr>
                            <th>中期目標</th>
                            <td>2位</td>
                        </tr>
                        <tr>
                            <th>短期目標</th>
                            <td>2位</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">短期目標に向かっての課題</p>
            <div class="px-2 mb-2">
                <table class="table table-bordered mb-2">
                    <tbody>
                        <tr class="table-success">
                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star5.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-success">
                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-success">
                            <th class="text-center"><img src="/images/icon-tech.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-danger">
                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-danger">
                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-danger">
                            <th class="text-center"><img src="/images/icon-physics.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star3.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-info">
                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-info">
                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star4.svg" alt=""/>
                            </td>
                        </tr>
                        <tr class="table-info">
                            <th class="text-center"><img src="/images/icon-mental.png" width="30" height="30" /></th>
                            <td>I will train harder and harder to win a gold medal.</td>
                            <td class="text-center">
                                <img src="/images/star4.svg" alt="/images/star4.svg"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>

        <div className="mt-3">
            <div className="row">
                <div className="col-6">
                    <Button size="large" color="primary" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '2px solid white'}} onClick={(e)=>window.location.href = '/home'}>キャンセル</Button>
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

