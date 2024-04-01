
import React from 'react'

const Card = ({item, index}) => {
  return (
    <div className='w-full h-40 flex justify-between items-center'>
        <div className='w-20 h-full flex justify-center items-center mr-10'>
          <img src={item.avatar}  alt="" />
        </div>
        <div className='w-1/4 h-full text-sm flex justify-between items-center'>
          <span className=''>{`${item.first_name} ${item.last_name}`}</span>
          
        </div>
        <div className='w-1/4 h-full text-sm flex justify-between items-center'>
          <span className='w-auto mx-10'>{item.email}</span>
        </div>
        <div className='w-1/4 h-full text-sm flex justify-center items-center'>
          <span>{item.gender}</span>
        </div>
        <div className='w-1/4 h-full text-sm flex justify-center items-center'>
          <span className={item.available ? `text-green-400` : `text-red-400`}>{item.available ? "Available" : "Not Available"}</span>
        </div>
    </div>
  )
}

export default Card
