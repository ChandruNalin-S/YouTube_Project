import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const URL = searchParams.get("v");

  
  useEffect(()=>{
    dispatch(closeMenu());
  },[]);

  return (
    <div className='mt-20 ml-20 w-full'>
      <div className='px-5 flex'>
        <div>
          <iframe width="900" height="500" src={"https://www.youtube.com/embed/"+URL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full ml-2'>
          <LiveChat/>
        </div>
      </div>
      <div className='w-[64%]'>
        <CommentContainer/>
      </div>
    </div>
    
  )
}

export default WatchPage;
