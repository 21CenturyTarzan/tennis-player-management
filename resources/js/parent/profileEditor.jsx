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
  { value: '男', label: '男' },
  { value: '女', label: '女' }
]

const  ParentProfileEditor = () => {

    const [isEditFlag, setEditFlag] = useState(false);
    const [isSubmitting, setSubmit] = useState(false);
    
    const [birth, setBirth] = useState(new Date());
    const [gender, setGender] = useState(gender_options[0]);
    const [phone, setPhone] = useState('');
    const [childEmail, setChildEmail] = useState('');
    const [imgUri, setImgUri] = useState('/images/blank.png');
    const [convertimgUri, setConvertImgUri] = useState('/images/blank.png');


    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('gender', JSON.stringify(gender.value));
        formdata.append('birth', JSON.stringify(birth.getFullYear()+'-'+(birth.getMonth()+1)+'-'+birth.getDate()));
        formdata.append('phone', JSON.stringify(phone));
        formdata.append('image', convertimgUri);
        formdata.append('childEmail', JSON.stringify(childEmail));

        setSubmit(true)

        axios.post('/parent/profile/store', formdata)
        .then(response => {
            if(response.data=='success'){
                window.location.href = '/home';
            }
        })
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

        <form className="needs-validation"  onSubmit={handleSubmit} >
            <div className="avatar-editor-wrapper">
                <div className="img-wrap">
                    {
                        isEditFlag ?
                            <ImageCrop src={imgUri} setWidth={250} setHeight={250} square={false} resize={true} onCrop={onCropped}/>
                        : <img src={convertimgUri} className="avatar"/>
                    }
                    {
                        !isEditFlag &&
                            <label htmlFor="upload" style={{marginBottom: '0px'}}>
                                <img src="/images/icon-pencil.svg" className="upload-label"/>
                                <input type="file" id="upload" name="upload-avatar-file" style={{marginBottom: '7px', display:'none'}}  accept=".png, .jpg, .jpeg" onChange={(e) => handleImageChange(e)} />
                            </label>
                    }
                    {
                        isEditFlag ? 
                            <Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(false)}}>save</Button> 
                            :<Button fullWidth variant="contained" onClick={(e)=>{ e.preventDefault(); setEditFlag(true)}}>crop</Button>                                
                    }    
                </div>
            </div>

            <div className="profile-edit-box mt-3">
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
                    <label htmlFor="phone" className="col-md-3 col-form-label text-md-right">郵便番号</label>
                    <div className="col-md-9">
                        <input id="phone" name="phone" type="text" className="form-control" placeholder="000-0000" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="child-email" className="col-md-3 col-form-label text-md-right">子メール</label>
                    <div className="col-md-9">
                        <input id="child-email" name="child-email" type="email" className="form-control" value={childEmail} onChange={(e)=>{setChildEmail(e.target.value)}} required/>
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

if(document.getElementById('parent-profile')){
    ReactDOM.render(
        <ParentProfileEditor />,
    document.getElementById('parent-profile')
  );
}

