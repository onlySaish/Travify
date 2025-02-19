import React from 'react'
import ReactPlayer from 'react-player';

function Video() {
  return (
    <div className='flex flex-row justify-center h-screen w-full'>
        <ReactPlayer
        url="https://youtu.be/Mf_nGEPIsQ8?si=P1Ektnv6pUm5XIUr" // Replace with your video URL
        playing={true}  // Autoplay enabled
        loop={true}     // Loop enabled
        muted={false}    // Mute video (required for autoplay in some browsers)
        controls={false} // Show YouTube controls
        width="100%"     // Adjust width
        height="80vh"   // Adjust height
        className= "h-full"
      />
    </div>
  )
}

export default Video