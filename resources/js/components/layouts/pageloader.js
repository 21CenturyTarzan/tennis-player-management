import React, { useState, useEffect }from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  loader: {
    zIndex: 10,
    position: 'fixed',
    top: '0px'
}
});

const getWidth = () => {
    return (document.getElementById('l-side-content').clientWidth / 2 - 10)
}

const getHeight = () => {
    return (document.getElementById('l-side-content').clientHeight / 2 - 20)
}

export  default function PageLoader(){
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());
  let [height, setHeight] = useState(getHeight());

  const classes = useStyles();

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
      setHeight(getHeight())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    setWidth(getWidth())
    setHeight(getHeight())
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
   
  }, [])

  return (
   
        <CircularProgress color="secondary" style={{top:height, color:'#10580c', left:width, position:'absolute'}}/>
  );
}