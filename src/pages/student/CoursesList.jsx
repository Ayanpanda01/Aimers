import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Searchbar from '../../components/student/Searchbar';
import { useSelector } from 'react-redux';
import CourseCard from '../../components/student/CourseCard';
import { useEffect, useState } from 'react';
import Footer from '../../components/student/Footer';
const CoursesList = () => {

  const navigate = useNavigate();
  const { input } = useParams();
  const allCourses = useSelector((state) => state.counter.allCourses);
  const [filteredCourses, setFilteredCourses] =useState(allCourses);

  useEffect(() => {
    if (input) {
      setFilteredCourses(
        allCourses.filter((course) =>
          course.title.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setFilteredCourses(allCourses);
    }
  }, [input, allCourses]);

  return (
    <div className=''>
      <div className='relative md:px-36 px-8 pt-24 text-left'>
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
          <p className='text-gray-500'><span className='text-blue-600 cursor-pointer' onClick={() => navigate('/')}>Home</span> / <span>Course List</span></p>
          </div>
           <Searchbar data={input} />
        </div>
        {
          input &&<div className='inline-flex items-center gap-4 px-4 py-2 border border-zinc-400/50 mt-8 -mb-8 text-gray-600'>
            <p>{input}</p>
            <i className="ri-add-large-line rotate-45 cursor-pointer" onClick={() => navigate('/course-list')}></i>
          </div>
        }
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filteredCourses.map((course ,index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
       
      </div>
      <Footer/>
    </div>
  )
}

export default CoursesList