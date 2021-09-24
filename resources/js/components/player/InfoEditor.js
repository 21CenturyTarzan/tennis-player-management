

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


const  InfoEditor = () => {

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
        <form action="">
            <div className="mt-3 pt-2 rounded-top-15 text-white player-main-info">
                <div className="name pt-3 pt-md-5 ">
                    <p className="text-center bg-red-4 font-weight-bold">
                        {/* <!-- name --> */}
                        <input type="text" name="name" className="w-50 w-md-75 bg-none edit-box border-0" value="{{Auth::user()->name}}" required />
                    </p>
                </div>
                <div className="img-wrap mt-3 mt-md-5">
                    <div className="row">
                        <div className="col-md-4 text-center text-md-right">
                            <label htmlFor="crop">
                                <img src="{{Auth::user()->img}}" alt="{{Auth::user()->img}}" className="avatar" style={{cursor:'pointer'}} />
                                <input type="file" name="image" id="crop" className="d-none" />
                            </label>
                        </div>
                        <div className="col-md-8">
                            <p className="text-center bg-black-4">
                                {/* <!-- title1 --> */}
                                <input type="text" name="title1" className="w-75 bg-none edit-box border-0" value="私の目標は○○！！"  required />
                            </p>
                            <p className="text-center bg-black-4">
                                {/* <!-- title2 --> */}
                                <input type="text" name="title2" className="w-75 bg-none edit-box border-0" value="誰々に勝ちたい！！"  required />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="person-info mt-3 mt-md-5 bg-black-6 rounded-top-20 border-top border-white text-center">
                    <table className="table m-0 p-1 text-white text-center">
                        <tbody>
                            <tr>
                                <td className="col-4 border-0">
                                    <p className="value">
                                        34<span>歳</span>
                                    </p>
                                </td>
                                <td className="col-4 border-0">
                                    {/* <!-- height --> */}
                                    <p className="value">
                                        <input type="number" name="height" className="w-75 bg-none edit-box border-0" value="170"  required /><span>cm</span>
                                    </p>
                                </td>
                                <td className="col-4 border-0">
                                    {/* <!-- weight --> */}
                                    <p className="value">
                                        <input type="number" name="weight" className="w-75 bg-none edit-box border-0" value="65.4"  required /><span>kg</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>

            <div className="mt-3 p-2 shadow-lg bg-black-4">
                <h3 className="text-center text-white">RANK</h3>
                <table className="table table-bordered m-0 p-1 text-white text-center">
                    <tbody>
                        <tr>
                            <th>JTAU18</th>
                            <td><input type="number" name="jta-u-18" className="w-75 bg-none edit-box border-0" value="1" required /><span>位</span></td>
                        </tr>
                        <tr>
                            <th>JTAU34</th>
                            <td><input type="number" name="jta-u-own" className="w-75 bg-none edit-box border-0" value="1"  required /><span>位</span></td>
                        </tr>
                        <tr>
                            <th>関東U18</th>
                            <td><input type="number" name="gandong-u-18" className="w-75 bg-none edit-box border-0" value="1"  required /><span>位</span></td>
                        </tr>
                        <tr>
                            <th>関東U34</th>
                            <td><input type="number" name="gandong-u-own" className="w-75 bg-none edit-box border-0" value="1"  required /><span>位</span></td>
                        </tr>
                        <tr>
                            <th>埼玉U34</th>
                            <td><input type="number" name="saitama" className="w-75 bg-none edit-box border-0" value="1"  required /><span>位</span></td>
                        </tr>
                        <tr>
                            <th>School</th>
                            <td><input type="number" name="school" className="w-75 bg-none edit-box border-0" value="1"  required /><span>位</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-3 p-2 shadow-lg bg-black-4">
                <h3 className="text-center text-white">個人情報</h3>
                <table className="table table-bordered m-0 text-white">
                    <tbody>
                        <tr>
                            <th>性別</th>
                            <td><input type="text" name="gender" className="w-100 bg-none edit-box border-0" value="女"  required /></td>
                        </tr>
                        <tr>
                            <th>生年月日</th>
                            <td><input type="date" name="birth" className="w-100 bg-none edit-box border-0" value=""  required /></td>
                        </tr>
                        <tr>
                            <th>学校</th>
                            <td><input type="text" name="school" className="w-100 bg-none edit-box border-0" value="Kansas States University"  required/></td>
                        </tr>
                        <tr>
                            <th>学年</th>
                            <td><input type="text" name="grade" className="w-100 bg-none edit-box border-0" value="大学1年"  required/></td>
                        </tr>
                        <tr>
                            <th>郵便番号</th>
                            <td><input type="text" name="phone" className="w-100 bg-none edit-box border-0" value="000-0000"  required /></td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td><input type="text" name="address" className="w-100 bg-none edit-box border-0" value="埼玉県所沢市" required /></td>
                        </tr>
                        <tr>
                            <th>主な戦績</th>
                            <td><textarea name="" id="career" rows="5" className="w-100 bg-none text-white border-0"  required></textarea></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

            <button type="submit">Submit</button>
            </form>
    );
  }

if(document.querySelector('#info-editor')){
    ReactDOM.render(
        <InfoEditor />,
    document.querySelector('#info-editor')
  );
}

