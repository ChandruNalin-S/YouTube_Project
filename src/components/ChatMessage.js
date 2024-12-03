import React from 'react'
import { USER_ICON_URL } from '../utils/Constants'

const ChatMessage = (info) => {

  const {name,message} = info;

  return (
    <div className='flex items-center p-1 my-2 shadow-md rounded-md'>
      <div>
        <img className='h-8' src={USER_ICON_URL} alt='user icon'/>
      </div>
      <div>
        <span className='font-bold mr-2 ml-2'>{name}</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage
