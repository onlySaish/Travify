import React from 'react'
import Hero from '../features/auth/components/Hero'
import Video from '../features/auth/components/Video'
import { useNavigate } from 'react-router'
import Popup from '../features/Popup'
import { Link } from 'react-router'

function LandingPage() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
}
  return (
    <div className='h-screen w-full flex flex-col'>
      <Popup/>
      
      {/* NavBar */}
      <div className='w-full bg-gradient-to-r from-purple-800 to-black flex flex-row justify-between items-center py-4'>
        <div className='flex flex-row gap-4 ml-8'>
          <div className='h-8 w-8 rounded-full' style={{backgroundImage : "url('vite.svg')"}} ></div>
          <div className='text-2xl font-bold text-white'>Travify</div>
        </div>

        <div>
          <button   
          onClick={handleSignup}
          className='text-white bg-orange-700 p-2 rounded-3xl font-bold px-4 py-2 mr-8 cursor-pointer'>
            Signup
          </button>
        </div>
      </div>

      <Video/>
      <div className='max-h-1/2 flex flex-row max-w-full bg-black text-white'>
        <Hero/>
        {/* About */}
        <div className='px-8 flex flex-col justify-center items-center'>
          <div className='text-4xl font-bold mb-8'>About US</div>
          <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum reprehenderit nemo odio repellat illum et cum amet deserunt non possimus doloribus, eos nulla adipisci officiis ipsam animi pariatur earum.</div>
        </div>
      </div>

      {/* Lead Generation */}
      <div className='bg-black text-white flex flex-col justify-center items-center py-3 border-none'>
        <div className='text-center text-3xl w-3/4 '>🌍✈️ Adventure Awaits!🚀🏝️</div>
        <div className='text-center text-3xl w-3/4 '>Sign up early & grab exclusive travel deals before they take off!</div>
        <div>
          <button   
          onClick={handleSignup}
          className='mt-4 text-white bg-orange-700 p-2 rounded-3xl font-bold px-12 py-2 text-4xl cursor-pointer'>Signup</button>
        </div>
      </div>

      {/* Footer */}
      <div className='w-full bg-gradient-to-t from-purple-800 to-black flex flex-col gap-4 py-4 items-center border-none'>

        <div className='text-4xl font-extrabold text-white'>
          Travify
        </div>

        <div className='text-5xl text-white flex gap-5'>
          <a className='fa-brands fa-instagram' href="http://"></a>
          <a className='fa-brands fa-facebook' href="http://"></a>
          <a className='fa-brands fa-linkedin' href="http://"></a>
          <a className='fa-brands fa-telegram' href="http://"></a>
        </div>

      </div>
    </div>
  )
}

export default LandingPage