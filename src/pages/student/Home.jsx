import React, { use, useRef, useState } from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Home = () => {

  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-30 pt-24 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-white to-cyan-100/70 overflow-hidden home xx '>
      
      <Hero/>
    <Companies/>
    <CoursesSection/>
    <CallToAction/>
    <Footer/>
  </div>
  )
}

export default Home