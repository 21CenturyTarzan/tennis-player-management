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
const preference = [
        {value: '北海道'  , label: '北海道'  },
        {value: '青森県'  , label: '青森県'  },
        {value: '岩手県'  , label: '岩手県'  },
        {value: '宮城県'  , label: '宮城県'  },
        {value: '秋田県'  , label: '秋田県'  },
        {value: '山形県'  , label: '山形県'  },
        {value: '福島県'  , label: '福島県'  },
        {value: '茨城県'  , label: '茨城県'  },
        {value: '栃木県'  , label: '栃木県'  },
        {value: '群馬県'  , label: '群馬県'  },
        {value: '埼玉県'  , label: '埼玉県'  },
        {value: '千葉県'  , label: '千葉県'  },
        {value: '東京都'  , label: '東京都'  },
        {value: '神奈川県', label:  '神奈川県'},
        {value: '新潟県'  , label: '新潟県'  },
        {value: '富山県'  , label: '富山県'  },
        {value: '石川県'  , label: '石川県'  },
        {value: '福井県'  , label: '福井県'  },
        {value: '山梨県'  , label: '山梨県'  },
        {value: '長野県'  , label: '長野県'  },
        {value: '岐阜県'  , label: '岐阜県'  },
        {value: '静岡県'  , label: '静岡県'  },
        {value: '愛知県'  , label: '愛知県'  },
        {value: '三重県'  , label: '三重県'  },
        {value: '滋賀県'  , label: '滋賀県'  },
        {value: '京都府'  , label: '京都府'  },
        {value: '大阪府'  , label: '大阪府'  },
        {value: '兵庫県'  , label: '兵庫県'  },
        {value: '奈良県'  , label: '奈良県'  },
        {value: '和歌山県', label:  '和歌山県'},
        {value: '鳥取県'  , label: '鳥取県'  },
        {value: '島根県'  , label: '島根県'  },
        {value: '岡山県'  , label: '岡山県'  },
        {value: '広島県'  , label: '広島県'  },
        {value: '山口県'  , label: '山口県'  },
        {value: '徳島県'  , label: '徳島県'  },
        {value: '香川県'  , label: '香川県'  },
        {value: '愛媛県'  , label: '愛媛県'  },
        {value: '高知県'  , label: '高知県'  },
        {value: '福岡県'  , label: '福岡県'  },
        {value: '佐賀県'  , label: '佐賀県'  },
        {value: '長崎県'  , label: '長崎県'  },
        {value: '熊本県'  , label: '熊本県'  },
        {value: '大分県'  , label: '大分県'  },
        {value: '宮崎県'  , label: '宮崎県'  },
        {value: '鹿児島県', label:  '鹿児島県'},
        {value: '沖縄県'  , label: '沖縄県'  }
]

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


const  PlayerProfileEditor = () => {

    const [isEditFlag, setEditFlag] = useState(false);
    
    const [birth, setBirth] = useState(new Date());
    const [gender, setGender] = useState(gender_options[0]);
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState(grade_options[0]);
    const [grade_year, setGradeYear] = useState(grade_year_options[0]);
    const [phone, setPhone] = useState('');
    const [area, setArea] = useState(preference[0]);
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
        formdata.append('address', JSON.stringify(area.value+' '+address));
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
                        <div className="row">
                            <div className="col-6">
                                <Select id="area" options={preference} value={area} onChange={(opt)=>setArea(opt)}/>
                            </div>
                            <div className="col-6">
                                <input id="address" name="address" type="text" className="form-control" value={address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                            </div>
                        </div>
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

if(document.querySelector('#player-profile')){
    ReactDOM.render(
        <PlayerProfileEditor />,
    document.querySelector('#player-profile')
  );
}

