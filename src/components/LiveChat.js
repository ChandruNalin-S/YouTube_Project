import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomSentence, RandomNamegenerate } from '../utils/helper';

const LiveChat = () => {

  const [liveMessage,setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const message = useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    // api polling
    const timer = setInterval(()=>{
      console.log("API POLLING");


      dispatch(addMessage({
        name:RandomNamegenerate(),
        message:getRandomSentence(),
      }));

    },2000);

    return ()=>{
      clearInterval(timer);
    }
  },[]);


  return (
    <>
    <div>
      <div className='w-full p-2 h-[500px] border border-black rounded-lg bg-gray-50 overflow-y-scroll flex flex-col-reverse'>
        {message.map((m,i)=>{
          return <ChatMessage key={i} name={m.name} message={m.message} />
        })} 
      </div>
    </div>
    <form className='w-full shadow-lg p-2 rounded-md mt-2' onSubmit={(e)=>{
      e.preventDefault();
    }} > 

      <input className='w-[80%] p-2 rounded-sm' type='text' placeholder='Your opinion' value={liveMessage}  onChange={(e)=>{
        setLiveMessage(e.target.value);
      }}  />
      <button className='text-white bg-green-600 font-semibold px-4 py-2 ml-5 rounded-md' 
      onClick={()=>{
        dispatch(addMessage({
          name:"Chandru S",
          message:liveMessage
        }))
        setLiveMessage("");
      }} >send</button>


    </form>
    </>
  )
}

export default LiveChat
