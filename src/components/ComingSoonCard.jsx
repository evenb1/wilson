import React from 'react'
import { useState } from 'react'

const ComingSoonCard = ({imgUrl, name}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full border-solid border-[1px] border-gray-200'>
        <img src={imgUrl} alt={name}
         className='w-full h-[280px]'  onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
        </img>
        <h3 className='mt-2 px-2 text-xl font-bold leading-normal'>{name}</h3>
    </div>
  )
}

export default ComingSoonCard