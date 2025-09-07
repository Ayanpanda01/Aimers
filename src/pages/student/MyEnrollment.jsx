import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';
const MyEnrollment = () => {
  const navigate = useNavigate();
   const calculateChapterTime = (courseData) => {
  if (!courseData) return null;

  // Total minutes
  let totalMinutes = courseData.chapters.reduce((total, chapter) => {
    const [h, m, s] = chapter.duration.split(' ').reduce(
      (acc, time) => {
        const [value, unit] = time.split(/(h|m|s)/);
        if (unit === "h") acc[0] += parseInt(value);
        if (unit === "m") acc[1] += parseInt(value);
        if (unit === "s") acc[2] += parseInt(value);
        return acc;
      },
      [0, 0, 0]
    );

    return total + h * 60 + m + Math.round(s / 60);
  }, 0);
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const enrolledCourses= useSelector((state) => state.counter.allCourses);
  return (
   <>
    <div className='md:px-36 px-8 pt-10'><h1 className='font-semibold text-2xl'>My Enrollments</h1>
    <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
      <thead className='text-gray-900 border-b border-zinc-800/60 bg-gray-500/20 text-sm text-left max-sm:hidden'>
        <tr>
          <th className='px-4 py-3 font-semibold truncate'>Course </th>
          <th className='px-4 py-3 font-semibold truncate'>Duration</th>
          <th className='px-4 py-3 font-semibold truncate'>Completed</th>
          <th className='px-4 py-3 font-semibold truncate'>Status</th>
        </tr>
      </thead>
      <tbody className='text-gray-700'>
        {enrolledCourses.map((course, index) => (
          <tr className='border-b border-zinc-800/60' key={index}>
            <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center gap-3'><img src={course.thumbnail} alt="" className='w-14 sm:w-24 md:w-28' />
           <div className='flex-1'><p className='mb-1 max-sm:text-sm'>{course.title}</p>
           <Line percent={getRandomNumber(0, 100)} strokeWidth={2} strokeColor="#3b82f6" className='bg-gray-300 rounded-full' />
           </div>
           </td>
           <td className='px-4 py-3 max-sm:hidden'>
            {calculateChapterTime(course)} </td>
            <td className='px-4 py-3 max-sm:hidden'>
             {getRandomNumber(0, course.chapters.length)}/{course.chapters.length} </td>
            <td className='px-4 py-3 max-sm:text-right'>
              <button className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white w-32' onClick={()=>{navigate('/player/'+course.courseId)}}>{course.chapters.length %getRandomNumber(0, course.chapters.length)==0 ? "Completed" : "Pending"}</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <Footer/></>
  )
}

export default MyEnrollment