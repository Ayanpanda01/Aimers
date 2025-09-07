import React from 'react'

const CallToAction = () => {
  return (
    <div className=' flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'><h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime , anywhere</h1>
    <p className='text-gray-500 sm:text-sm'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ca</p>
    <div className='flex gap-6 items-center font-medium mt-4'><button className='bg-blue-500 text-white py-3 px-6 md:py-3 md:px-8 rounded-md hover:bg-blue-600'>Get Started</button> <button className='flex items-center text-black/60'>Learn more <i className="ri-arrow-right-line"></i></button></div></div>
  )
}

export default CallToAction