import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';

const SiderBar = () => {


  const menuView = useSelector((store=> store?.app?.isMenuOpen));

  if(!menuView) return null;// this is called a early return pattern.

  return (
    <div className='w-45 shadow-lg p-6 fixed bg-white top-20 bottom-0 z-10'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Foods</li>
        <li>Series</li>
        <li>Tv</li>
      </ul>
      <h1 className='font-semibold pt-4'>You</h1>
      <ul>
        <li>Music</li>
        <li>News</li>
        <li>Sports</li>
        <li>Series</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className='font-semibold pt-4'>Subscriptions</h1>
      <ul>
        <li>Empty Hand</li>
        <li>Logic First Tamil</li>
        <li>The React Pack</li>
        <li>TN Series</li>
        <li>Tv</li>
      </ul>
    </div>
  )
}

export default SiderBar;
