import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/Constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {


  const [Videos, setVideos] = useState([]);

  useEffect(()=>{
     getvideos();
  },[]);

  const getvideos = async()=>{
    const videoData = await fetch(YOUTUBE_VIDEOS_API);
    const json = await videoData.json();
    //console.log(json);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      <AdVideoCard info={Videos[0]}/>
      {Videos.map((video)=>{
        return <Link key={video.id} to={"/watch?v="+ video.id}><VideoCard info={video}/></Link>
      })}
      
    </div>
  )
}

export default VideoContainer
