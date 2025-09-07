import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/student/Loading';
import humanizeDuration from 'humanize-duration';
import { Toaster, toast } from 'react-hot-toast'
import YouTube from 'react-youtube';
import Footer from '../../components/student/Footer';
const Player = () => {

  let id=useParams().id;
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
  const [playerData, setPlayerData] = useState(null);
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
  function getYouTubeVideoId(url) {
 const videoId = url.split('v=')[1]?.split('&')[0]; // Simple extraction
 return videoId;
}

  return (
    <>
   {courseData ?( <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36 pt-20 md:pt-30' >
      {/*left*/}
      <div className='text-gray-800'>
        <h2 className='text-xl font-semibold'>Course structure</h2>
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
              <li key={index} className='text-sm font-normal bg-white h-20 text-start border border-gray-200/80 rounded-2xl shadow-xl pt-8 pl-3' onClick={() => {setPlayerData({video: getYouTubeVideoId(chapter.video), description: chapter.description});}}><i class="ri-play-circle-fill text-black/80 pr-2 "></i>{chapter.title} - {chapter.duration}</li>
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

      </div>

      {/*right*/}
      <div className='rounded-md overflow-hidden'>
        {playerData ? (
          <YouTube videoId={playerData.video} opts={{ width: '100%', height: '100%' }} iframeClassName='w-full aspect-video' />
        ) : (
         <div className='relative '>
          <img src={courseData?.thumbnail} alt="" srcset="" className='w-full aspect-video absolute top-0 left-0'/>
           <div className='w-full aspect-video bg-gray-200/20 flex items-center justify-center relative z-20 backdrop-blur-sm'>
            <p className='text-gray-800 text-lg font-medium'>Select a chapter to play</p>
          </div>
         </div>
         
        )}
      {playerData ? <p className='text-gray-800 text-lg pt-4'>{playerData?.description}</p> : ""}
      </div>
    </div>) : <Loading/>}
    <Toaster position="top-center" />
    <Footer/>
    </>
  )
}

export default Player