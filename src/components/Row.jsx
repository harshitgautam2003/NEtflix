import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Movies from './Movies'


const Row = ({title,Url}) => {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
        axios.get(Url)
        .then(res=>setMovies(res.data.results))
    },[Url])
    console.log(movies);
  return (
    <>
        <h2 className='text-white text-xl font-semibold'>{title}</h2> 
        <div className='realtive flex items-center'>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item,id)=>(
                    <Movies item={item} key={id} />
                ))}
            </div>
        </div>
    </>
  )
}

export default Row
