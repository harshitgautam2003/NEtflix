import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
const Main = () => {
    const [movies,setMovies]=useState([]);

    const mv=movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular)
        .then(res=>setMovies(res.data.results))
    },[])

  return (
    <div className='w-full h-[550px] text-white'>
       <div className='w-full h-full'>
            <div className=' absolute w-full h-[550px] bg-gradient-to-tr from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${mv?.backdrop_path}`} alt={mv?.title}/>
            <div className=' absolute w-full top-[25%] p-4 '>
                <h1 className='text-5xl font-semibold my-5'>{mv?.title}</h1>
                <div>
                    <button className='border bg-gray-300 text-black py-2 px-4'>Play Now!</button>
                    <button className='border text-white py-2 px-4 ml-4'>Watch Later</button>
                </div>
                <p className='w-[50%] text-gray-200 mt-7'>{mv?.overview}</p>
            </div>
       </div>
    </div>
  )
}

export default Main
