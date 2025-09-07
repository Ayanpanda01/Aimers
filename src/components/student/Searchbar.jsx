import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Searchbar = ({data}) => {
  const [input, setInput] = useState(data?data:'')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (
    <form action="" onSubmit={handleSubmit} className='max-w-xl w-full md:h-14 h-12 flex items-center border border-gray-300 rounded-full  shadow-sm bg-white/80 backdrop-blur-sm'>
      <i className="ri-search-line text-gray-600/80 px-3 md:text-xl text-lg"></i>
      <input type="text" placeholder='search for courses' className='outline-none w-full h-full text-gray-500/90' onChange={(e) => setInput(e.target.value)} value={input} />
      <button type="submit" className='bg-blue-600 rounded-full text-white md:px-10 px-7 md:py-3 py-2 mx-1'>Search</button>
    </form>
  )
}

export default Searchbar