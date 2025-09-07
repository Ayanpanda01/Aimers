import React from 'react'
import { createBrowserRouter, RouterProvider, useMatch } from 'react-router-dom'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollment'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import DashBoard from './pages/educator/DashBoard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import NavBar from './components/student/NavBar'
import Home from './pages/student/Home'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const App = () => {
    const [animation, setAnimation] = useState(true)
  const reff = useRef(null)
  useGSAP(() => {
    let tl=gsap.timeline()
    tl.from(reff.current.querySelectorAll("h1"),  { x: 100, opacity: 0, duration: 1.5, ease: "power4.out",stagger: 0.5 });
    tl.to(reff.current.querySelectorAll("h1"),  { x: -100, opacity: 0, duration: 1.5, ease: "power4.out",stagger: 0.5 });
    tl.to(".xx",{
      opacity:0,
      duration: 0.2,
      ease: "power4.out",
      delay: 0.1,
      onComplete: () => setAnimation(false)
    })
  })
  const [lastScroll, setLastScroll] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down and not at very top → hide navbar
        setHideNav(true);
      } else {
        // scrolling up → show navbar
        setHideNav(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  const isEducatorRoute = window.location.pathname.includes('/educator');
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<Home/></div>,
    },
    {
      path: '/course-list',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<CoursesList/></div>,
    },
    {
      path: '/course/:id',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<CourseDetails/></div>,
    },
    {
      path: '/my-enrollments',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<MyEnrollments/></div>,
    },
    {
      path: '/course-list/:input',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<CoursesList/></div>,
    },
    {
      path: '/player/:id',
      element: <div>{!isEducatorRoute && <NavBar hide={hideNav} />}<Player/></div>,
    },
     {
      path: '/loading/:path',
      element: <Loading/>,
    },
     {
      path: '/educator',
      element: 
        <Educator/>,
        children: [
      { path: 'educator', element: <DashBoard /> },
      { path: 'add-course', element: <AddCourse/> },
      { path: 'my-courses', element: <MyCourses/> },
      { path: 'student-enrolled', element: <StudentsEnrolled/> },
    ],
    
  },
  {
      path: '*',
      element: <div className='w-screen h-screen flex justify-center items-center text-xl font-medium text-black'>404 Not Found</div>
    }
      
  ])
  return (
    <div className='min-h-screen bg-white app'>
      <div className={`h-full w-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-white gap-2 ${animation ? "" : "hidden"}`} ref={reff}>
        <h1 className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium text-2xl md:text-4xl'>Welcome</h1>
        <h1 className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium text-2xl md:text-4xl'>to</h1>
        <h1 className='bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium text-2xl md:text-4xl'>Aimers</h1>
      </div>

      { !animation && <RouterProvider router={router} /> }
    </div>
  )
}

export default App