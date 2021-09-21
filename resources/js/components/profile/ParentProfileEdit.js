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

const  ParentProfileEdit = () => {

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

        axios.post('/profile/store/parent', formdata)
        .then(response => {
            if(response.data=='success'){
                window.location.href = '/dashboard';
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

if(document.getElementById('parent-profile-modal-content')){
    ReactDOM.render(
        <ParentProfileEdit />,
    document.getElementById('parent-profile-modal-content')
  );
}

