import React, { useEffect, useState } from 'react'
import { MENU_URL, USER_ICON_URL, YOUTUBE_SEARCH_API, YOUTUBE_URL } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestionList, setSuggestionList] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=> store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  useEffect(()=>{// the below code is called a debouncing. 
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestionList(searchCache[searchQuery]);
      }else{
        searchSuggestions();
      }
    },200);

    return ()=>{
      clearTimeout(timer);
    }

  },[searchQuery]);// whenever the state is change or update then the useEffect will be called.

  const searchSuggestions = async()=>{
    console.log("API CALLS - "+searchQuery);
    const response =await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await response.json();
    //console.log(json[1]);
    setSuggestionList(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  }




  return (
    <div className='grid grid-flow-col items-center shadow-lg p-2  fixed z-10 left-0 right-0 bg-white'>

      <div className='flex col-span-1 items-center'>
        <img onClick={toggleMenuHandler} className='h-16' src={MENU_URL} alt='menu'/>
        <a href='/'>
          <img className='h-16' src={YOUTUBE_URL} alt="youtube icon"/>
        </a>
      </div>

      <div className='col-span-10 text-center'>
        <div>
          <input className='w-[55%] border border-gray-400 rounded-l-full p-2' value={searchQuery} 
          onChange={(e)=>{
            setSearchQuery(e.target.value);
          }}     

          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
          
          type='text' placeholder='Search'/>
          <button className='border border-gray-400 rounded-r-full px-4 py-2 text-gray-400'>Search</button>
        </div>
        {showSuggestions && <div className='fixed left-[32%] right-[64%] shadow-2xl bg-white p-2 rounded-lg w-[39%] border border-gray-200'> 
          <ul className='text-left'>
            {suggestionList.map((suggestion)=>{
                return <li key={suggestion} className='my-2 hover:bg-gray-200 rounded-md'>{suggestion}</li>
            })}
            
          </ul>
        </div>}
      </div >

      <div className='col-span-1'>
        <img className='h-16' src={USER_ICON_URL} alt='user icon'/>
      </div>
    </div>
  )
}

export default Header;
