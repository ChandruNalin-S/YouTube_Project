import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const URL = searchParams.get("v");

  
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  return (
    <div>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+URL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;
