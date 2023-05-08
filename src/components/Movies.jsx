import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'


const Movies = ({item}) => {
    const [like,setLike]=useState(false)
  return (
    <>
      <div className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='p-2 text-[15px] font-thin flex justify-center h-full items-center text-center '>{item?.title||item?.name}</p>
                <div>
                  {like?<FaHeart className='absolute top-4 left-4 text-gray-400 '/> :<FaRegHeart className='absolute top-4 left-4 text-gray-400 '/>}
              </div>
            </div>
            
      </div>
    </>
  )
}

export default Movies
