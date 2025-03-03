import React, { useState } from 'react'
import Popup from '../features/Popup'
import SignupStep1 from '../features/auth/components/SignupStep1';
import SignupStep2 from '../features/auth/components/SignupStep2';
import SignupStep3 from '../features/auth/components/SignupStep3';
import Loader from '../features/Loader';
import { useNavigate } from 'react-router';

function SignUpPage() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate()

  const nextStep = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handleHome = () => {
    navigate("/");
  }
  return (
    <>
    <div className="min-h-screen w-full bg-center bg-cover flex flex-col items-center gap-16" style={{backgroundImage : `url(https://media.istockphoto.com/id/1682187360/photo/western-ghats-mountain-range-india.jpg?s=612x612&w=0&k=20&c=gwB96mDF6f4o4g6z-eApINw_2-jfgwNaobL6iuqYQ9I=)`}}>
        <div className='w-full bg-gradient-to-r from-purple-800 to-black flex flex-row justify-between items-center py-4'>
        <div className='flex flex-row gap-4 ml-8'>
          <div className='h-8 w-8 rounded-full' style={{backgroundImage : "url('vite.svg')"}} ></div>
          <div className='text-2xl font-bold text-white'>Travify</div>
        </div>

        <div>
          <button   
          onClick={handleHome}
          className='text-white bg-orange-700 p-2 rounded-3xl font-bold px-4 py-2 mr-8 cursor-pointer'>
            Home
          </button>
        </div>
        </div>

            <Popup/>
            <Loader/>
            {step === 1 && <SignupStep1 nextStep={nextStep} />}
            {step === 2 && <SignupStep2 nextStep={nextStep} email={userData.email} userData={userData} />}
            {step === 3 && <SignupStep3 nextStep={nextStep} userData={userData} />}
    </div>
    </>
  )
}

export default SignUpPage
