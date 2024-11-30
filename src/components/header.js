import React from 'react'
import { MENU_URL, USER_ICON_URL, YOUTUBE_URL } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {


  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col items-center shadow-lg p-2 m-2'>

      <div className='flex col-span-1 items-center'>
        <img onClick={toggleMenuHandler} className='h-16' src={MENU_URL} alt='menu'/>
        <a href='/'>
          <img className='h-16' src={YOUTUBE_URL} alt="youtube icon"/>
        </a>
      </div>

      <div className='col-span-10 text-center'>
        <input className='w-[55%] border border-gray-400 rounded-l-full p-2' type='text' placeholder='Search'/>
        <button className='border border-gray-400 rounded-r-full px-4 py-2 text-gray-400'>Search</button>
      </div >

      <div className='col-span-1'>
        <img className='h-16' src={USER_ICON_URL} alt='user icon'/>
      </div>
    </div>
  )
}

export default Header;
