import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CourseCard from './CourseCard'
const CoursesSection = () => {

  const allCourses = useSelector((state) => { return state.counter.allCourses })
  console.log(allCourses)
  return (
    <div className='py-16 md:px-40 px-2'><h2 className='text-gray-800 font-medium text-3xl'>Learn from the best</h2>
    <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated courses across various categories .From coding and design to buisness and wellness, our courses are designed to help you succeed.</p>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:px-0 md:my-16 my-10 gap-4'>{allCourses.slice(0,4).map((course,index) => (
       <CourseCard key={index} course={course} />
     ))}</div>
    <Link to="/course-list" className='text-gray-500 border border-gray-500/30 px-10 py-3 hover:underline' onClick={()=>{scrollTo(0,0)}}>Browse all courses</Link>
    </div>
  )
}

export default CoursesSection