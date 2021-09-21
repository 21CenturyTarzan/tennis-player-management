import ReactDOM from 'react-dom';
import { useState } from 'react';
// material
import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';
import Select from 'react-select'
import DatePicker from 'react-date-picker';

import ImageCrop from 'react-image-crop-component';

import 'react-image-crop-component/style.css'


// ----------------------------------------------------------------------

const gender_options = [
  { value: 'm', label: '男性' },
  { value: 'w', label: '女性' }
]

const grade_options = [
    { value: '小学', label: '小学' },
    { value: '中学', label: '中学' },
    { value: '高校', label: '高校' }
  ]

var grade_year_options = [
    { value: '1年', label: '1年' },
    { value: '2年', label: '2年' },
    { value: '3年', label: '3年' },
    { value: '4年', label: '4年' },
    { value: '5年', label: '5年' },
    { value: '6年', label: '6年' }
  ]


const  PlayerProfile = () => {

    const [isEditFlag, setEditFlag] = useState(false);
    
    const [birth, setBirth] = useState(new Date());
    const [gender, setGender] = useState(gender_options[0]);
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState(grade_options[0]);
    const [grade_year, setGradeYear] = useState(grade_year_options[0]);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [lesson, setLesson] = useState('');
    const [career, setCareer] = useState('');
    const [height, setheight] = useState('');
    const [weight, setWeight] = useState('');
    
    const [imgUri, setImgUri] = useState('/images/blank.png');
    const [convertimgUri, setConvertImgUri] = useState('/images/blank.png');

    const [isSubmitting, setSubmit] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('gender', JSON.stringify(gender.value));
        formdata.append('birth', JSON.stringify(birth.getFullYear()+'-'+(birth.getMonth()+1)+'-'+birth.getDate()));
        formdata.append('height', JSON.stringify(height));
        formdata.append('weight', JSON.stringify(weight));
        formdata.append('school', JSON.stringify(school));
        formdata.append('grade', JSON.stringify(grade.value +' '+ grade_year.value));
        formdata.append('phone', JSON.stringify(phone));
        formdata.append('address', JSON.stringify(address));
        formdata.append('lesson', JSON.stringify(lesson));
        formdata.append('career', JSON.stringify(career));
        formdata.append('image', convertimgUri);

        setSubmit(true)

        axios.post('/profile/store/player', formdata)
        .then(response => {
            if(response.data=='success'){
                window.location.href = '/dashboard';
            }
        })
        console.log(formdata)
    }

    const changeGrade = (opt) => {
        if(opt.value == '小学')
            grade_year_options = [
                { value: '1年', label: '1年' },
                { value: '2年', label: '2年' },
                { value: '3年', label: '3年' },
                { value: '4年', label: '4年' },
                { value: '5年', label: '5年' },
                { value: '6年', label: '6年' }
            ]
        else 
        grade_year_options = [
            { value: '1年', label: '1年' },
            { value: '2年', label: '2年' },
            { value: '3年', label: '3年' }
        ]
        setGrade(opt);
    }

    const onCropped = function (e) {
        let image = e.image
        let image_data = e.data
        setConvertImgUri(e.image)
    }
    
    const handleImageChange = (e) => {

        e.preventDefault();
        let reader = new FileReader();
        let _file = e.target.files[0];

        reader.readAsDataURL(_file);

        reader.onloadend = () => {
            setImgUri(reader.result);
            setConvertImgUri(reader.result);
        };
    };
  
    return (

        <form className="needs-validation"  onSubmit={handleSubmit}>
            <div className="avatar-editor-wrapper">
                <div className="img-wrap">
                {
                    isEditFlag ?
                        <ImageCrop src={imgUri} setWidth={400} setHeight={350} square={false} resize={true} border={"dashed #ffffff 2px"} onCrop={onCropped}/>
                    : <img src={convertimgUri}/>
                }
                </div>

                <div className="row">
                    <div className="col-2">
                        <label htmlFor="upload" style={{marginBottom: '0px'}}>
                            <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699329-icon-57-document-download-128.png" width="50" height="42"/>
                            <input type="file" id="upload" name="upload-avatar-file" style={{marginBottom: '7px', display:'none'}}  accept=".png, .jpg, .jpeg" onChange={(e) => handleImageChange(e)} />
                        </label>
                    </div>
                    <div className="col-10">
                    {
                        isEditFlag ? 
                            <Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(false)}}>save</Button> 
                            :<Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(true)}}>crop</Button>                                
                    }    
                    </div>
                </div> 
            </div>

            <div className="profile-edit-box">
                <div className="form-group row">
                    <label htmlFor="gender" className="col-md-3 col-form-label text-md-right">性別</label>
                    <div className="col-md-9">
                        <Select id="gender" options={gender_options} value={gender} onChange={(option)=>{setGender(option)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="birth" className="col-md-3 col-form-label text-md-right">生年月日</label>
                    <div className="col-md-9">
                        <DatePicker id="birth" value={birth} onChange={(date) => setBirth(date)}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="height" className="col-md-3 col-form-label text-md-right">キー / 体重</label>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-6">
                                <input id="height" name="height" type="number" className="form-control"  value={height} onChange={(e)=>{setheight(e.target.value)}} required/>
                                <label style={{position: 'absolute', bottom:'0', right:'25px'}}>cm</label>
                            </div>
                            <div className="col-6">
                                <input id="weight" name="weight" type="number" className="form-control"  value={weight} onChange={(e)=>{setWeight(e.target.value)}} required/>
                                <label style={{position: 'absolute', bottom:'0', right:'25px'}}>kg</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="school" className="col-md-3 col-form-label text-md-right">学校</label>
                    <div className="col-md-9">
                        <input id="school" name="school" type="text" className="form-control" value={school} onChange={(e)=>{setSchool(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="grade" className="col-md-3 col-form-label text-md-right">学年</label>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-6">
                                <Select id="grade" options={grade_options} value={grade} onChange={changeGrade}/>
                            </div>
                            <div className="col-6">
                                <Select id="grade_year" options={grade_year_options} value={grade_year} onChange={(opt)=>{setGradeYear(opt)}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="phone" className="col-md-3 col-form-label text-md-right">郵便番号</label>
                    <div className="col-md-9">
                        <input id="phone" name="phone" type="text" className="form-control" placeholder="000-0000" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="address" className="col-md-3 col-form-label text-md-right">住所</label>
                    <div className="col-md-9">
                        <input id="address" name="address" type="text" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="lesson" className="col-md-3 col-form-label text-md-right">受講回数</label>
                    <div className="col-md-9">
                        <input id="lesson" name="lesson" type="text" className="form-control" value={lesson} onChange={(e)=>{setLesson(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="footprint" className="col-md-3 col-form-label text-md-right">主な戦績</label>
                    <div className="col-md-9">
                        <textarea id="career" name="career"  className="form-control" rows="7" value={career} onChange={(e)=>{setCareer(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-9 offset-md-3">
                        <LoadingButton   fullWidth  size="large"  type="submit"   variant="contained" loading={isSubmitting}>
                            送信
                        </LoadingButton>
                    </div>
                </div>

            </div>
        </form>
    );
  }

if(document.getElementById('player-profile-modal-content')){
    ReactDOM.render(
        <PlayerProfile />,
    document.getElementById('player-profile-modal-content')
  );
}

