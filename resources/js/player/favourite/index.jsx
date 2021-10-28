import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { filter } from 'lodash';
import ReactHtmlParser from "react-html-parser";
import { Rating, RatingView } from 'react-simple-star-rating';

import { LoadingButton } from '@material-ui/lab';

import IconButton from '@mui/material/IconButton';
import ListAltIcon from '@mui/icons-material/ListAlt';

import moment from 'moment';


function PlayerFavourite() {

    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [category_list, setCategoryList] = useState([]);
    const [quotation_list, setQuotationList] = useState([]);
    const [favourite_list, setFavouriteList] = useState([]);

    const [filter_key, setFilterKey] = useState('');
    const [FILTERLIST, setFilterList] = useState([]);


    useEffect( () => {
        axios.get('/api/quotation/list')
        .then( response=>{
            console.log(response.data.params);
            if(response.data.status_code == 200){
                setQuotationList(response.data.params.quotations);
                setCategoryList(response.data.params.category);
                setFilterKey(response.data.params.category[0].category);
            }
        })
    }, []);


    useEffect( () => {
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/favourite/list', {params:{player_id: id}})
        .then( response=>{
            setLoad(true);
            console.log(response.data.params);
            if(response.data.status_code == 200){
                setFavouriteList(response.data.params.indexes);
            }
        })
    }, []);

    
    useEffect(()=>{
        filtering(filter_key);
    }, [filter_key])


    const filtering = (query) => {
        var filterlist = filter(quotation_list, (_quot) => _quot.category.toLowerCase().indexOf(query.toLowerCase()) !== -1);        
        setFilterList(filterlist);
    }

    const setFavourite = (quotation_id) => {
        var id = Number(document.getElementById('player_id').value);
        axios.get('/api/player/favourite/set', {params:{player_id: id, quotation_id: quotation_id}})
        .then(async (response)=>{
            setLoad(true);
            if(response.data.status_code == 200){
                setFavouriteList(response.data.params)
            }
        })
    }
   

    return (
    <div id="favourite">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg" style={{minHeight:'700px'}}>
            <h3 className="mt-2 p-1 position-relative text-white bg-green text-center font-weight-bold">
                <Link to="/player/favourite/store">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', left:'23px'}}>
                        <ListAltIcon/>
                    </IconButton>
                </Link>
                <span>格言集</span>
                <Link to="/player/favourite/store">
                    <IconButton style={{color:'white', position:'absolute', padding:'3px', right:'23px'}}>
                        <ListAltIcon/>
                    </IconButton>
                </Link>
            </h3>
            {
                !load && <CircularProgress color="secondary" style={{top:'calc(40vh - 22px)', left:'calc(50% - 22px)', color:'green', position:'absolute'}}/>
            }
            {
                load && 
                <div>
                    <div className="m-2" style={{height:'37px'}}>
                        <select className="text-center p-1 float-right" value={filter_key} onChange={e=>setFilterKey(e.target.value)}>
                        {
                            category_list.map((item, k)=>
                                <option value={item.category} key={k}>{item.category}</option>
                            )
                        }
                        </select>
                    </div>
                    <div className="m-2 p-1 border">
                    {
                        FILTERLIST.map((item,k)=>
                            <div className="quotation-item" key={k}
                                onClick={e=>setFavourite(item.id)}>
                                <p className="mb-1">{ReactHtmlParser(item.quotation)}</p>
                                <p className="m-0 font-weight-bold">{item.author}</p>
                                <RatingView stars={1} ratingValue={favourite_list.findIndex((element) => element == item.id) >= 0} className="favourite-icon"/>
                            </div>
                        )
                    }
                    </div>
                </div>
            }
        </div>
    </div>
    );
}



export default PlayerFavourite;