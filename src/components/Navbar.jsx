import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-1 py-2 absolute w-full'>
        <h1 className=" text-red-600 text-5xl font-semibold cursor-pointer tracking-wide">NETFLIX</h1>
        <div>
            <button className='bg-white px-6 py-2 rounded cursor-pointer'>
                Sign up 
            </button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer mx-1.5'>
                Log in
            </button>
        </div>
    </div>
  )
}

export default Navbar
