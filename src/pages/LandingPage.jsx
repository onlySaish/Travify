import React from 'react'
import Navbar from '../features/auth/components/Navbar'
import Hero from '../features/auth/components/Hero'
import About from '../features/auth/components/About'
import Video from '../features/auth/components/Video'
import { useNavigate } from 'react-router'

function LandingPage() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
}
  return (
    <div className='h-screen w-full flex flex-col'>
      <Navbar/>
      <Video/>
      <div className='max-h-1/2 flex flex-row max-w-full bg-black text-white'>
        <Hero/>
        <About/>
      </div>
      <div className='bg-black text-white flex flex-col justify-center items-center'>
        <div className='text-center text-3xl w-3/4 '>🌍✈️ Adventure Awaits!🚀🏝️</div>
        <div className='text-center text-3xl w-3/4 '>Sign up early & grab exclusive travel deals before they take off!</div>
        <div>
          <button   
          onClick={handleSignup}
          className='mt-4 text-white bg-orange-700 p-2 rounded-3xl font-bold px-12 py-2 text-4xl cursor-pointer'>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage