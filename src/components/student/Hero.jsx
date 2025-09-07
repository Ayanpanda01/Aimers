import React from 'react'
import Searchbar from './Searchbar'
import Companies from './Companies'
import CoursesSection from './CoursesSection'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-40 pt-24 px-7 md:px-0 space-y-7 text-center '>
     <div className='w-full flex flex-col items-center justify-center'>
       <h1 className='font-bold text-gray-800 max-w-3xl mx-auto md:text-5xl text-2xl sm:text-3xl text-center'>Welcome to Aimers </h1>
      <h1 className='font-bold text-gray-800 max-w-3xl mx-auto md:text-5xl text-2xl sm:text-3xl text-center'>Hated by many,<span className='text-blue-600'>defeated by none</span></h1>
     </div>
      <p className='text-gray-600 max-w-2xl  mx-auto md:block hidden'>Join us in our journey to make learning accessible and enjoyable for everyone.</p>
      <p className='text-gray-600 max-w-sm  mx-auto md:hidden block'>Together, we can learn more, achieve more</p>
      <Searchbar/>
      
    </div>
  )
}

export default Hero