import React from 'react'

const search = () => {
  return (
    <div className='flex flex-1 w-full h-10 gap-4 justify-center my-30 mb-8'>
        <div className='flex items-center gap-2  bg-gray-700 w-1/3 p-4 rounded-lg'>
            <img src="/icon-search.svg" alt="search" width="18" height="18" />
            <input type="text" placeholder="Search for a place..." className='bg-gray-700 text-white placeholder:text-gray-400 border-none focus:outline-none' />
        </div>
        <div><button className='bg-blue-500 text-white p-2 h-10 rounded-lg '>Search</button></div>
    </div>
  )
}

export default search