import React from 'react'
import { Link ,useLocation, useNavigate} from 'react-router-dom'
import { useClerk,useUser,UserButton } from '@clerk/clerk-react'
import { useSelector } from 'react-redux'
const NavBar = ({hide}) => {
  const{openSignIn}=useClerk()
  const user=useUser()
   const nevigate =useNavigate()
   const isEducator = useSelector((state) => state.counter.isEducator)
  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-4  fixed w-full top-0 left-0 z-30 ${hide ? "hidden" : "block"}`}>
        <div className='flex items-center gap-2 cursor-pointer' onClick={()=>{nevigate("/")}}><i className="ri-medal-fill text-blue-500 font-medium text-4xl max-sm:text-2xl"></i>
        <h2 className='text-black font-semibold text-3xl max-sm:text-2xl hidden md:block'>Aimers</h2></div>
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-3'>
               {user.isSignedIn &&(<>
                   <button className='text-center' onClick={() => { nevigate('/educator') }}>
                       {isEducator ? "Educator dashboard" : "Become Educator"}
                   </button>
                   <Link to='/my-enrollments' className='text-center'>
                       My Enrollments
                   </Link>
               </>)}
                
            </div>
            {
                user.isSignedIn ? <UserButton/> : <button onClick={()=>openSignIn()} className='bg-blue-500 text-white px-5 py-3 rounded-full'>Create Account</button>
            }

        </div>
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
            <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
                {user.isSignedIn &&(<>
                   <button onClick={() => { nevigate('/educator') }}>
                      {isEducator ? "Educator dashboard" : "Become Educator"}
                   </button>
                   <Link to='/my-enrollments'>
                       My Enrollments
                   </Link>
               </>)}
            </div>
            {user.isSignedIn ? <UserButton/> : <i className="ri-user-line text-2xl font-semibold text-black max-sm:text-xl" onClick={()=>openSignIn()}></i>}
        </div>


    </div>
  )
}

export default NavBar