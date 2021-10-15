import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';

// material
import CircularProgress from '@material-ui/core/CircularProgress';

import { Button } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Rating, RatingView } from 'react-simple-star-rating';


// ----------------------------------------------------------------------

const  PlayerResultNew = () => {

        

    return (
        <form  className="needs-validation">
            <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
                <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold">
                    <span className="ft-25">試合結果</span>
                </h3>
                
                <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
                

                <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
                

                <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
                


                <div className="mt-3 mb-2 px-2 px-md-4">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/player/result" style={{textDecoration:'none'}}>
                                <Button size="large" fullWidth variant="contained" style={{backgroundColor: 'transparent', border: '1px solid green', color:'green', fontSize:'16px'}} >
                                    <span>キャンセル</span>
                                </Button>
                            </Link>
                        </div>
                        <div className="col-6">
                            <LoadingButton size="large" type="submit" 
                                fullWidth  
                                variant="contained" 
                                endIcon={<SendIcon />}
                                style={{backgroundColor: 'green', fontSize:'16px'}}
                                // loading={submit}
                            >
                                <span>送信</span>
                            </LoadingButton>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
  }



export default PlayerResultNew;