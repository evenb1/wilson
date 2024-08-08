import React from 'react'
import { useState } from 'react'

const ComingSoonCard = ({imgURL, name}) => {
  return (
    <div className='flex mt-10 flex-1 flex-col w-full max-sm:w-full '>
        <div className='w-full h-full'>
            <img src={imgURL} alt={name}
         className='' >
        </img>
            </div>
        <h3 className='mt-2 px-2 text-2xl font-Archivo text-center font-extrabold leading-0'>{name}</h3>
    </div>
  )
}

export default ComingSoonCard