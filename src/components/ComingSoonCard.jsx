import React from 'react'
import { useState } from 'react'

const ComingSoonCard = ({imgURL, name}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
        <img src={imgURL} alt={name}
         className='w-full h-[280px]' >
        </img>
        <h3 className='mt-2 px-2 text-xl font-bold leading-normal'>{name}</h3>
    </div>
  )
}

export default ComingSoonCard