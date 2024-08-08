import React from 'react'
import { useState } from 'react'

const PopularProductCard = ({imgURL, imgURL2, name, price}) => {
  
    const [isHovered, setIsHovered] = useState(false);
    return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full border-solid border-[1px] border-gray-200'>
        <img src={isHovered ? imgURL2 : imgURL} alt={name}
         className='w-full h-[280px]'  onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
        </img>
        <h3 className='mt-2 px-2 text-xl font-bold leading-normal'>{name}</h3>
        <p className='px-2 font-medium'>{price}</p>
        <button class="text-red mt-2 hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border-t border-gray-200 bg-white px-3 text-black transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white  hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Add to Bag</span></button>

        </div>
        
  )
}

export default PopularProductCard