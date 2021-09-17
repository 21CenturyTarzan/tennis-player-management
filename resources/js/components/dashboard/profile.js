import ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';

import Select from 'react-select'
import DatePicker from 'react-date-picker';

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
  const grade_year_options = [
    { value: '1年', label: '1年' },
    { value: '2年', label: '2年' },
    { value: '3年', label: '3年' },
    { value: '4年', label: '4年' },
    { value: '5年', label: '5年' },
    { value: '6年', label: '6年' }
  ]


const  Profile = () => {
    // const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [birthday, onChange] = useState(new Date());
  
    const RegisterSchema = Yup.object().shape({
   
      lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
      
      school: Yup.string().required('School is required'),
      gender: Yup.string().required('gender is required')
    });
  
    const formik = useFormik({
      initialValues: {
        gender: '',
        lastName: '',
        email: '',
        password: ''
      },
      validationSchema: RegisterSchema,
      onSubmit: () => {
        navigate('/dashboard', { replace: true });
      }
    });
  
    const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  
    return (
    <FormikProvider value={formik}>
        <Form autoComplete="off"  onSubmit={handleSubmit}>

            <div className="form-group row">
                <label htmlFor="gender" className="col-md-3 col-form-label text-md-right">性別</label>
                <div className="col-md-9">
                    <Select id="gender" options={gender_options} defaultValue={gender_options[0]}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="birth" className="col-md-3 col-form-label text-md-right">生年月日</label>
                <div className="col-md-9">
                    <DatePicker id="birth" value={birthday} onChange={onChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="school" className="col-md-3 col-form-label text-md-right">学校</label>
                <div className="col-md-9">
                    <input id="school" name="school" type="text" className="form-control" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="grade" className="col-md-3 col-form-label text-md-right">学年</label>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-6">
                            <Select id="grade" options={grade_options} defaultValue={grade_options[0]}/>
                        </div>
                        <div className="col-6">
                            <Select id="grade_year" options={grade_year_options} defaultValue={grade_year_options[0]}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="phone" className="col-md-3 col-form-label text-md-right">郵便番号</label>
                <div className="col-md-9">
                    <input id="phone" name="phone" type="text" className="form-control" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="address" className="col-md-3 col-form-label text-md-right">住所</label>
                <div className="col-md-9">
                    <input id="address" name="address" type="text" className="form-control" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="lesson" className="col-md-3 col-form-label text-md-right">受講回数</label>
                <div className="col-md-9">
                    <input id="lesson" name="lesson" type="text" className="form-control" required/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="footprint" className="col-md-3 col-form-label text-md-right">主な戦績</label>
                <div className="col-md-9">
                    <textarea id="footprint" name="footprint"  className="form-control" rows="7" required/>
                </div>
            </div>
            
            <LoadingButton   fullWidth  size="large"  type="submit"   variant="contained"  loading={isSubmitting}>
                送信
            </LoadingButton>
        </Form>
    </FormikProvider>
    );
  }

if(document.getElementById('profile-modal-content')){
    ReactDOM.render(
        <Profile />,
    document.getElementById('profile-modal-content')
  );
}

