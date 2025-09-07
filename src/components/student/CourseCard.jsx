import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const CourseCard = ({course}) => {
  const currency = useSelector((state) => state.counter.currency)
  console.log(course)
  return (
    <Link to={`/course/${course.courseId}`} className='block  p-4 hover:scale-[1.03] duration-200 rounded-lg space-y-2 overflow-hidden border border-black/30' onClick={()=>{scrollTo(0,0)}}>
      <img src={course.thumbnail} alt={course.title} className='w-full object-cover rounded-lg overflow-hidden'/>
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold text-gray-800'>{course.title}</h3>
        <p className='text-gray-700'>{course.instructor}</p>
        <div className='flex items-center justify-between text-sm text-gray-600 mt-2 mb-3'>
          <p className='font-semibold '>{course.Rating}</p>
          <div className='flex items-center gap-0.5'>{[...Array(Math.floor(course.Rating))].map((_, i) => <span key={i}>⭐</span>)}</div>
          <p className='text-gray-500'>{course.review.length} Reviews</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{course.price}</p>
      </div>
    </Link>
  )
}

export default CourseCard