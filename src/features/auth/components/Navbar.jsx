import React from 'react'
import { Navigate, useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate();
    const handleSignup = () => {
        navigate("/signup");
    }
  return (
    <>
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
    </>
  )
}

export default Navbar