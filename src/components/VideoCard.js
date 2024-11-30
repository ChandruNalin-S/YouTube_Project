import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  if(!info) return;

  const {snippet,statistics} = info;
  const {thumbnails,title, channelTitle} = snippet;
  const {viewCount} = statistics;


  return (
    <div className='py-2 w-72 shadow-lg rounded-lg mx-5 my-2'>
      <img className='rounded-md' src={thumbnails?.medium?.url} alt='thumbnail'/>
      <ul className='px-2'>
        <li className='font-semibold my-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard
