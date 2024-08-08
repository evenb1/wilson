import React from 'react';

const ComingSoonCard = ({ imgURL, name }) => {
  return (
    <div className='relative flex mt-10 flex-1 flex-col w-full max-sm:w-full'>
      <div className='relative w-full h-[300px] cursor-pointer'>
        <img
          src={imgURL}
          alt={name}
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <span className='text-white text-2xl font-palanquin font-bold '>Coming Soon</span>
        </div>
      </div>
      <h3 className='mt-2 px-2 text-2xl font-Archivo text-center font-extrabold leading-0'>{name}</h3>
    </div>
  );
};

export default ComingSoonCard;