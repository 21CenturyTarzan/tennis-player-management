import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingButton } from '@material-ui/lab';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

import moment from 'moment';


function PlayerFavourite() {

    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [tournament_list, setTournamentList] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [submit, setSubmit] = useState(false);

    useEffect( () => {

        setLoad(false);
        
        // var id = Number(document.getElementById('player_id').value);
        // axios.get('/api/player/match/list', {params:{player_id: id}})
        // .then( response=>{
        //     setLoad(true);
        //     if(response.data.status_code == 200){
        //         setTournamentList(response.data.params);
        //         console.log(response.data.params)
        //     }
        // })
    }, []);

    // useEffect( ()=>{
    //     console.log(tournament, question_list);
    // }, [tournament, question_list])


   

    return (
    <div id="favourite">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
            <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                <Link to="/player/match/new">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                        <AddIcon/>
                    </IconButton>
                </Link>
                <span>お気に入り</span>
                <Link to="/player/match/new">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                        <AddIcon/>
                    </IconButton>
                </Link>
            </h3>
            {/* {
                !load && <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
            } */}
            {
                // load && tournament_list &&
                <>
                    <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white">トーナメントのリスト</p>
                    
                </>
            }
        </div>
    </div>
    );
}



export default PlayerFavourite;