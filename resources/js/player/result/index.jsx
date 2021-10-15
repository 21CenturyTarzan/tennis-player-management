import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PlayerResult() {
    const [selected, setSelected] = useState('');

    return (
    <div id="result">
        <div className="mt-3 py-2 rounded-15 bg-white shadow-lg">
            <h3 className="mt-2 p-1 text-white bg-green text-center font-weight-bold position-relative">
                <Link to="/player/match/edit" className="edit edit-left py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-pencil.svg" alt="icon-pencil.svg" width="30" height="30" title="Edit"/>
                </Link>
                <span  className="ft-25">試合結果</span>
                <Link to="/player/match/new" className="edit edit-right py-1" style={{marginTop:'-5px'}}>
                    <img src="/images/icon-add.svg" alt="icon-add.svg" width="30" height="30"title="Add"/>
                </Link>
            </h3>
            
            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            

            <p className="w-50 w-md-75 p-1 pl-2 mb-2 bg-black-4 rounded-right-20 text-white"></p>
            


            <p className="w-100 p-1 pl-2 mb-2 bg-black-4 text-white text-right">最新の更新日 : 2019/3/20 19:40</p>
        </div>
    </div>
    );
}



export default PlayerResult;