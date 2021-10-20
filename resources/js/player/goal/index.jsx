import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import moment from 'moment';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});




const  PlayerGoal = () => {
    
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [params, setParams] = useState(null);
    const [delIndex, setDeleteIndex] = useState(null);

    useEffect( () => {

        setLoad(false);
        
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/goal/list', {params:{player_id: id}})
        .then(async (response)=>{
            setLoad(true);
            if(response.data.status_code == 200){
                setParams(response.data.params)
            }
        })
    }, []);

    // useEffect(()=>{
    //     console.log(params);
    // },[params])

    const deleteGoal = (ix) => {
        setOpen(true);
        setDeleteIndex(ix);
    };
    
    const handleOK = () => {
        setOpen(false);
        var id = Number(document.getElementById('player_id').value);
        axios.delete('/api/player/goal/delete/'+delIndex, {params:{player_id: id}})
        .then(response=>{
            if(response.data.status_code == 200){
                notify();
                setParams(response.data.params)
            }
        })
    };

    const handleCancel = () => {
        setOpen(false);
    } 

    const notify = () => toast("削除成功");
    
    return (
        <div id="goal">
            <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
                <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                    <Link to="/player/goal/new">
                        <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                            <AddIcon/>
                        </IconButton>
                    </Link>
                    <span>目標管理</span>
                    <Link to="/player/goal/new">
                        <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                            <AddIcon/>
                        </IconButton>
                    </Link>
                </h3>
                {
                    !load && <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
                }
                {
                    load && params &&
                    <>
                        <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">入力リスト</p>
                        <div className="px-2 mb-2">
                            <table className="table table-bordered mb-2 text-center ft-xs-15">
                                <tbody>
                                    <tr>
                                        <th>入力日</th>
                                        <th>予定試合数</th>
                                        <th className="w-60-px">削除</th>
                                    </tr>
                                    {
                                        params.length > 0 ?
                                            params?.map((x, i)=>
                                                <tr className="pointer" key={i}>
                                                    <td>
                                                        <Link to={`/player/goal/detail/${x.id}`}>                                
                                                            {moment(x.created_at).format('YYYY/MM/DD  HH:mm')}
                                                        </Link>
                                                    </td>
                                                    <td>{`${JSON.parse(x.match_list).length}`}</td>
                                                    <td className="p-0">
                                                        <Button color="error" size="small">
                                                            <DeleteIcon fontSize="small" onClick={e=>deleteGoal(x.id)}/>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        : <tr><td colSpan="3">入力されたデータがありません。</td></tr>
                                    }
                                </tbody>
                            </table>
                            
                        </div>
                    </>
                }
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCancel}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"本当に削除しますか？"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        いったん削除されると、復元できません。<br/>
                        利点をご了承ください。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>いいえ</Button>
                    <Button onClick={handleOK}>はい</Button>
                </DialogActions>
            </Dialog>
            

            <ToastContainer />
        </div>
    );
}



export default PlayerGoal;