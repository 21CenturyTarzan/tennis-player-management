import ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, Button,TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import Select from 'react-select'
import DatePicker from 'react-date-picker';

import AvatarEditor from 'react-avatar-editor';


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


const  Profile = () => {

    const [isEditFlag, setEditFlag] = useState(false);
    
    const [birthday, setBirth] = useState(new Date());
    const [image_src, setImageSrc] = useState('/images/avatar.jpg')
    const [image_file, setImageFile] = useState('');
    const [gender, setGender] = useState(gender_options[0]);
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState(grade_options[0]);
    const [grade_year, setGradeYear] = useState(grade_year_options[0]);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [lesson, setLesson] = useState('');
    const [experience, setExperience] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('geklk')
        console.log(birthday)
        console.log(image_file)
        console.log(gender)
        console.log(school)
        console.log(grade)
        console.log(grade_year)
        console.log(phone)
        console.log(address)
        console.log(lesson)
        console.log(experience)
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
    
  
  
    return (

        <form  onSubmit={handleSubmit} method="POST" action="/profile">
            <div className="avatar-editor-wrapper">
                
                <input type="file" name="upload-avatar-file" style={{marginBottom: '7px'}} />
                {
                    isEditFlag ?
                        <AvatarEditor  image={image_src}  border={50}  color={[0, 0, 0, 0.6]} scale={1.2}  rotate={0} borderRadius = {0} />
                    : <img src={image_src} style={{width:'100%', border:'1px solid #dee2e6', marginBottom:'7px'}}/>
                }
                <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2}>
                    <Button fullWidth variant="contained" onClick={()=>setEditFlag(false)}>Save</Button>
                    <Button fullWidth variant="contained" onClick={()=>setEditFlag(true)}>Edit</Button>
                </Stack>
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
                        <DatePicker id="birth" value={birthday} onChange={setBirth}/>
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
                        <textarea id="footprint" name="footprint"  className="form-control" rows="7" value={experience} onChange={(e)=>{setExperience(e.target.value)}} required/>
                    </div>
                </div>
                
                <LoadingButton   fullWidth  size="large"  type="submit"   variant="contained">
                    送信
                </LoadingButton>
            </div>
        </form>
    );
  }

if(document.getElementById('profile-modal-content')){
    ReactDOM.render(
        <Profile />,
    document.getElementById('profile-modal-content')
  );
}

