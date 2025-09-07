import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/student/Loading';
import humanizeDuration from 'humanize-duration';
import { Toaster, toast } from 'react-hot-toast'
import YouTube from 'react-youtube';
const CourseDetails = () => {
  function getYouTubeVideoId(url) {
 const videoId = url.split('v=')[1]?.split('&')[0]; // Simple extraction
 return videoId;
}


  const [enrolled,srtEnrolled] = useState(false)
  const id = useParams().id;
   const allData = useSelector((state) => state.counter.allCourses);
   const currency = useSelector((state) => state.counter.currency);
   console.log(id);
   console.log(allData);
  const [courseData, setCourseData] = useState(null);
   const fetchCourseData = async () => {
     
      const course = await allData.find((course) => course.courseId === id);
      console.log(course);
      setCourseData(course);
    };

  useEffect(() => {
   
fetchCourseData();
  }, [id]);




 const calculateChapterTime = () => {
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

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};
const getResponsiveToastStyle = () => {
  const width = window.innerWidth;
  if (width < 480) {
    return {
      maxWidth: '95vw',
      fontSize: '14px',
      padding: '10px',
    };
  } else if (width < 768) {
    return {
      maxWidth: '90vw',
    };
  } else {
    return {
      maxWidth: '400px',
    };
  }
};

  
  return (
   courseData ?( <div className='flex md:flex-row flex-col-reverse gap-10 md:px-36 px-8  text-left md:pt-30 pt-20 relative items-start justify-between pb-4'>
       <Toaster position="top-center" />

      <div className='absolute top-0 left-0 bg-gradient-to-b from-cyan-200/50    filter w-full z-1 h-[500px]'></div>

       {/*left col*/}
       <div className='max-w-xl z-10 text-gray-500 '>
        <h1 className='font-semibold text-gray-800 md:text-4xl text-2xl'>{courseData?.title}</h1>
        <p className='pt-4 md:text-base text-sm'>{courseData?.description}</p>
        <div className=' flex items-center gap-3 md:flex-row flex-col pt-3 pb-1'>
           <div className='flex items-center gap-0.5'>{[...Array(Math.floor(courseData.Rating))].map((_, i) => <span key={i} className='text-xs'>⭐</span>)}</div>
         <p className='text-black/60 text-sm'>{courseData?.enrolled} students enrolled</p>
        </div>
        <p className='text-sm text-gray-600'>Course by <span className='text-blue-600/80 underline'>{courseData?.instructor}</span></p>
        <div className='pt-8 text-gray-800'>
          <h2 className='font-semibold text-lg'>{courseData?.chapters.length} {" "}Chapters <span> ({calculateChapterTime()})</span></h2>
          <ul className=' pl-1 flex flex-col gap-3 pt-4'>
            {courseData?.chapters.map((chapter, index) => (
              <li key={index} className='text-sm font-normal bg-white h-20 text-start border border-gray-200/80 rounded-2xl shadow-xl pt-8 pl-3' onClick={() => toast('You have to Enroll to access this content or if you are already enrolled go to My Enrollments', {className: 'max-w-[95vw] p-2 text-sm md:max-w-[400px] md:p-4 md:text-base'})}><i class="ri-play-circle-fill text-black/80 pr-2 "></i>{chapter.title} - {chapter.duration}</li>
            ))}
          </ul>
        </div>
        <div className='pt-8 text-gray-800 space-y-3'>
          <h2 className='font-semibold text-lg text-gray-700'>What will you learn?</h2>
          {courseData?.chapters.map((chapter, index) => (
            <p key={index} className='text-sm text-gray-600'>{chapter.description}</p>
          ))}
        </div>
       </div>


       {/*right col*/}
       <div className=' rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px]  z-50 shadow-2xl'>
       {courseData && (
  <YouTube
    videoId={getYouTubeVideoId(courseData.promoVideo)}
    opts={{ width: '100%', height: '100%' }}
    iframeClassName='w-full aspect-video'
  />
)}

        <div className='p-5'>
          <div className='flex items-center gap-2'>
            <i class="ri-timer-fill text-red-600 text-lg"></i>
            <p className='text-lg text-red-600'>5 days left at this price</p>
          </div>
          <div>
            <p className='text-3xl text-black/80 font-semibold'>{currency} {courseData?.price}</p>
          </div>
          <div className='flex items-center text-sm md:text-normal gap-4 pt-2 md:pt-4 text-gray-500'>
                 <div className='flex items-center gap-1 text-xl font-medium'>
                  <span>⭐</span>
                  <p>{courseData?.Rating}</p>
                 </div>
                 <div className='w-0.5 h-5 bg-gray-500'></div>
                 <div className='md:text-lg text-sm font-medium'> <i class="ri-timer-fill text-black text-lg"></i>{calculateChapterTime()}</div>
                 <div className='w-0.5 h-5 bg-gray-500'></div>
                 <h2 className='md:text-lg text-sm font-medium'>{courseData?.level}</h2>
          </div>
          <button className='bg-blue-600 text-white py-2 px-7 rounded font-medium mt-3 btn-shine hover:after:translate-x-full z-10 cursor-pointer'>{enrolled ? "Enrolled" : "Enroll"}</button>

          <h2 className='font-semibold text-lg text-gray-600 pt-2'>Reviews</h2>
         <div className='space-y-2 pt-2 w-[80%]'>
           {courseData?.review.map((review, index) =>{
            return <p key={index} className='text-sm text-gray-600'><span className='font-medium pr-1 text-gray-700'>{index+1}.</span>{review}</p>
          } )}
         </div>

        </div>
       </div>

    </div>):<Loading/>
  )
}

export default CourseDetails