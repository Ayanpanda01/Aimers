import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full mt-10 md:px-36 text-left'>
      <div className='container flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <i className="ri-medal-fill text-blue-500 font-medium text-4xl max-sm:text-2xl"></i>
          <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae expedita hic sint quod nam rerum modi iusto nobis, illum cupiditate.</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
        <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 gap-3 md:gap-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
           <li><a href="#">Privacy Policy</a></li>
        </ul></div>
        <div className='hidden md:flex flex-col items-start  w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/80'>Get the latest updates and offers.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder="Enter your email" className='p-2 rounded-md border-b border-white/60 bg-transparent text-white/70 focus:outline-none w-64 h-9 text-xs placeholder:text-gray-500'  />
            <button className='bg-blue-500 text-white p-2 rounded-md w-24 h-9 text-xs'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='text-center text-gray-600 py-4 text-xs md:text-sm'>© 2023 Aimers. All rights reserved.</p>
    </footer>
  )
}

export default Footer