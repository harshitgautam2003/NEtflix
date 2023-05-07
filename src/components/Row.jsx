import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title,Url,rId}) => {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
        axios.get(Url)
        .then(res=>setMovies(res.data.results))
    },[Url])

    const sLeft=()=>{
        var slider=document.getElementById('slider'+rId)
        slider.scrollLeft=slider.scrollLeft-555;

    }
    const sRight=()=>{
        var slider=document.getElementById('slider'+rId)
        slider.scrollLeft=slider.scrollLeft+555;
        
    }

  return (
    <>
        <h2 className='text-white md:text-xl font-semibold p-4'>{title}</h2> 
        <div className='realtive flex items-center group'>
                <MdChevronLeft onClick={sLeft}className="absolute bg-white left-0 opacity-40 hover:opacity-100 rounded-full z-10 hidden group-hover:block" size={35}/>
            <div id={'slider' +rId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item,id)=>(
                    <Movies item={item} key={id} />
                ))}
            </div>
                <MdChevronRight onClick={sRight} className="absolute bg-white right-0 opacity-40 hover:opacity-100 rounded-full z-10 hidden group-hover:block" size={35}/>
        </div>
    </>
  )
}

export default Row
