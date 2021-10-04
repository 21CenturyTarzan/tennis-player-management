

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

const  InfoEditor = ({profile, rank}) => {

    const [name, setName] = useState(profile.account.name);
    const [birth, setBirth] = useState(new Date());
    const [gender, setGender] = useState(profile.gender);
    const [school, setSchool] = useState(profile.school);
    const [grade, setGrade] = useState(profile.grade);
    const [phone, setPhone] = useState(profile.phone);
    const [address, setAddress] = useState(profile.address);
    const [lesson, setLesson] = useState(profile.lesson);
    const [career, setCareer] = useState(profile.career);
    const [height, setHeight] = useState(profile.height);
    const [weight, setWeight] = useState(profile.weight);
    
    const [imgUri, setImgUri] = useState(profile.account.img);
    const [convertimgUri, setConvertImgUri] = useState(profile.account.img);
    const [cropimgUri, setCropImgUri] = useState(profile.account.img);
    
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    
    const [jta_u_18, setJTAU18] = useState('');
    const [kanto_u_18, setKantoU18] = useState('');
    const [rankList, setRankList] = useState([]);
    
    const [age, setAge] = useState(0);
    const [isSubmitting, setSubmit] = useState(false);
    const [isEditFlag, setEditFlag] = useState(false);


    
    useEffect(() => {

        let birth = profile.birth.split(' ')[0]; //string 1998-07-09
        setBirth(birth);
        let today = new Date();
        let age = calculateAge(new Date(birth), today);

        if(Object.keys(rank).length === 0){
            setTitle1("私の目標は○○！！");
            setTitle2("誰々に勝ちたい！！");
            setDefaultRank(age);
            setJTAU18('-');
            setKantoU18('-');
        }
        else{
            setTitle1(rank.title1);
            setTitle2(rank.title2);
            setJTAU18(rank.jta_u_18);
            setKantoU18(rank.kanto_u_18);
            var obj = [];
            for(var i = 0; i < rank.rank_list.length; i++)                
                obj.push({'rankType': rank.rank_list[i].rank_type, 'rankValue': rank.rank_list[i].rank_value});

            setRankList(obj);
        }

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

    const calculateAge = (birth, today) => {
        let age = today.getFullYear() - new Date(birth).getFullYear();
        setAge(age);
        return age;
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

    const onCropped = function (e) {
        let image = e.image
        let image_data = e.data
        setCropImgUri(e.image)
    }

    const handleCrop = function(){
        setConvertImgUri(cropimgUri);
        return;
    }
    
    const handleImageChange = (e) => {

        e.preventDefault();
        let reader = new FileReader();
        let _file = e.target.files[0];

        reader.readAsDataURL(_file);

        reader.onloadend = () => {

            Promise.resolve()
            .then(() => { 
                setImgUri(reader.result);
                setCropImgUri(reader.result);
            } )
            .then(() => $('#cropModal').modal('show'))
        };
    };


    const addRank = () => {
        setRankList([...rankList, { rankType: "", rankValue: "" }]);
    };

    const removeListItem = () => {
        const list = [...rankList];
        list.pop();
        setRankList(list);
    };

    const deleteListItem = (e, index) => {
        const list = [...rankList];
        list.splice(index, 1);
        setRankList(list);
    }
    
    const changeListItem = (e, index) => {
        const { name, value } = e.target;
        const list = [...rankList];
        list[index][name] = value;
        setRankList(list);
    };
    
    
    const reloadRankList = () => {
        setDefaultRank(age);
    }
     

    return (
    <>
        <form  className="needs-validation"  onSubmit={handleSubmit} >
            <div className="mt-3 pt-2 rounded-top-15 text-white player-main-info">
                <div className="name pt-3 pt-md-5 ">
                    <p className="text-center bg-red-4 font-weight-bold">
                        {/* <!-- name --> */}
                        <input type="text" name="name" className="w-50 w-md-75 bg-none text-center text-white border-0" value={name} onChange={(e)=>setName(e.target.value)} required />
                    </p>
                </div>
                <div className="img-wrap mt-3 mt-md-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="m-auto ml-md-auto m-md-0 border-1 avatar-wrapper">
                                <a data-bs-toggle="modal" data-bs-target="#cropModal">
                                    <img src={convertimgUri} className="avatar"/> 
                                </a>
                                <input type="file" name="image" id="crop" className="d-none" onChange={handleImageChange}/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p className="text-center bg-black-4 ft-30 ft-md-20  m-1 m-md-0 my-md-3">
                                {/* <!-- title1 --> */}
                                <input type="text" name="title1" className="w-75 bg-none text-center text-white border-0" value={title1} onChange={e=>setTitle1(e.target.value)}  required />
                            </p>
                            <p className="text-center bg-black-4 ft-30 ft-md-20  m-1 m-md-0 my-md-3">
                                {/* <!-- title2 --> */}
                                <input type="text" name="title2" className="w-75 bg-none text-center text-white border-0" value={title2} onChange={e=>setTitle2(e.target.value)}  required />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                    <table className="table m-0 p-1 text-white text-center">
                        <tbody>
                            <tr>
                                <td className="col-4 border-0">
                                    <p className="hint">1995.6.28</p>
                                    <p className="value">{age}<span>歳</span></p>
                                </td>
                                <td className="col-4 border-0">
                                    <p className="hint">Height</p>
                                    <p className="value">{height}<span>cm</span></p>
                                </td>
                                <td className="col-4 border-0">
                                    <p className="hint">Weight</p>
                                    <p className="value">{weight}<span>kg</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-4 border-0">
                                    <p className="hint">U18</p>
                                    <p className="value">{kanto_u_18}<span>位</span></p>
                                </td>
                                <td className="col-4 border-0">
                                    <p className="hint">{new Date().getFullYear()} W-L</p>
                                    <p className="value">40-4</p>
                                </td>
                                <td className="col-4 border-0">
                                    <p className="hint">勝率</p>
                                    <p className="value">64<span>%</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-8 offset-md-2">
                    <div className="p-2 shadow-lg bg-black-4">
                        <h4 className="text-center text-white">
                            <img src="/images/icon-minus-white.svg" width="25" style={{position:'absolute', left:'30px', cursor:'pointer'}} onClick={removeListItem}/>
                            <span>RANK</span>
                            <img src="/images/icon-plus-white.svg" width="25" style={{position:'absolute', right:'30px', cursor:'pointer'}} onClick={addRank}/>
                        </h4>
                        <table className="table table-bordered m-0 p-1 text-white text-center">
                            <thead>
                                <tr>
                                    <td className="bg-white-2">区分</td>
                                    <td className="bg-white-2">
                                        <span>位</span>
                                        <img src="/images/icon-reload-white.svg" width="25" style={{position:'absolute', right:'30px', cursor:'pointer'}} onClick={reloadRankList}/>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JTAU18</td>
                                    <td>
                                        <input type="number" min='1' step='1' name="jta-u-18" className="w-50 bg-none text-center text-white border-0"  value={jta_u_18} onChange={e => setJTAU18(e.target.value)} required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>関東U18</td>
                                    <td>
                                        <input type="number" min='1' step='1' name="kanto-u-18" className="w-50 bg-none text-center text-white border-0"  value={kanto_u_18} onChange={e => setKantoU18(e.target.value)} required />
                                    </td>
                                </tr>
                                {
                                    rankList.length != 0 && 
                                    rankList.map((x, i)=>{
                                        return(
                                            <tr key={i}>
                                                <td><input type="type" name="rankType" className="w-100 bg-none text-center text-white border-0" placeholder="ex: JTAU18" value={x.rankType} onChange={e => changeListItem(e, i)} required/></td>
                                                <td>
                                                    <input type="number" min='1' step='1' name="rankValue" className="w-50 bg-none text-center text-white border-0"  value={x.rankValue} onChange={e => changeListItem(e, i)} required />
                                                    <img src="/images/icon-close-white.svg" width="25" style={{position:'absolute', right:'30px', cursor:'pointer'}} onClick={(e)=>deleteListItem(e, i)}/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="mt-3 p-2 shadow-lg bg-black-4">
                <h4 className="text-center text-white">個人情報</h4>
                <table className="table table-bordered m-0 text-white">
                    <tbody>
                        <tr>
                            <th>性別</th>
                            <td><input type="text" name="gender" className="w-100 bg-none text-center text-white border-0" value={gender} onChange={(e)=>setGender(e.target.value)}  required /></td>
                        </tr>
                        <tr>
                            <th>生年月日</th>
                            <td><input type="date" name="birth" className="w-100 bg-none text-center text-white border-0" value={birth} onChange={(e)=>{setBirth(e.target.value); calculateAge(e.target.value, new Date());} }  required /></td>
                        </tr>
                        <tr>
                            <th>キー(cm)</th>
                            <td><input type="number" name="height" min="100" step="0.1" className="w-100 bg-none text-center text-white border-0" value={height} onChange={(e)=>{setHeight(e.target.value);} }  required/></td>
                        </tr>
                        <tr>
                            <th>体重(kg)</th>
                            <td><input type="number" name="weight" min="30" step="0.1" className="w-100 bg-none text-center text-white border-0" value={weight} onChange={(e)=>{setWeight(e.target.value);} }  required /></td>
                        </tr>
                        <tr>
                            <th>学校</th>
                            <td><input type="text" name="school" className="w-100 bg-none text-center text-white border-0" value={school} onChange={(e)=>setSchool(e.target.value)}  required/></td>
                        </tr>
                        <tr>
                            <th>学年</th>
                            <td><input type="text" name="grade" className="w-100 bg-none text-center text-white border-0" value={grade} onChange={(e)=>setGrade(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <th>郵便番号</th>
                            <td><input type="tel" name="phone" className="w-100 bg-none text-center text-white border-0" value={phone} onChange={(e)=>setPhone(e.target.value)}  required /></td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td><input type="text" name="address" className="w-100 bg-none text-center text-white border-0" value={address} onChange={(e)=>setAddress(e.target.value)}  required /></td>
                        </tr>
                        <tr>
                            <th>受講回数</th>
                            <td><input type="text" name="lesson" className="w-100 bg-none text-center text-white border-0" value={lesson} onChange={(e)=>setLesson(e.target.value)}  required /></td>
                        </tr>
                        <tr>
                            <th>主な戦績</th>
                            <td><textarea name="career" id="career" rows="5" className="w-100 bg-none text-white border-0" value={career} onChange={(e)=>setCareer(e.target.value)}  required></textarea></td>
                        </tr>
                        
                    </tbody>
                </table>
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

        <div className="modal fade" id="cropModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Crop Image</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="avatar-editor-wrapper">
                            <div className="img-wrap">
                                {
                                    isEditFlag ?
                                        <ImageCrop src={imgUri} setWidth={250} setHeight={250} square={false} resize={true} onCrop={onCropped}/>
                                    : <img src={cropimgUri} className="avatar"/>
                                }
                                {
                                    !isEditFlag &&
                                        <label htmlFor="crop" style={{marginBottom: '0px'}}>
                                            <img src="/images/icon-pencil.svg" className="upload-label"/>
                                        </label>
                                }
                                {
                                    isEditFlag ? 
                                        <Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(false)}}>preview</Button> 
                                        :<Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(true)}}>crop</Button>                                
                                }    
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleCrop}>OK</button>
                    </div>
                </div>
            </div>    
        </div>
    </>
    );
  }

var element = document.querySelector('#info-editor');
if(element){

    var json= Object.assign({}, element.dataset);
    const profile = JSON.parse(json.profile|| '{}');
    const rank = JSON.parse(json.rank|| '{}');
    console.log(profile, rank)

    ReactDOM.render(<InfoEditor profile={profile} rank={rank}/>, element);
}

