import React from 'react'
import Button from './Button'


const ButtonItems = ["Live","Sports","Foods","Reaction","Korean","News","Hollywood","Music","Songs" ];

const ButtonList = () => {
  return (
    <div className='flex'>
      {ButtonItems.map((button)=>{
        return <Button key={button} name={button}/>
      })}
    </div>
  )
}

export default ButtonList
