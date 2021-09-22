import React, { useState, useEffect }from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export  default function PageLoader({query}){
  // save current window width in the state object
    let [width, setWidth] = useState(null);
    let [height, setHeight] = useState(null);

    const handleResize = () => {
        var w = document.querySelector(query).clientWidth / 2 - 20;
        var h = document.querySelector(query).clientHeight / 2 - 20;
        setWidth(w);
        setHeight(h);
    }

    useEffect(() => {

        handleResize();

        const resizeListener = () => {
            handleResize();
        };

        window.addEventListener('resize', resizeListener);

        return () => {
          window.removeEventListener('resize', resizeListener);
        }

    }, []);


  return (
    <CircularProgress color="secondary" style={{top:height, color:'#10580c', left:width, position:'absolute'}}/>
  );
}