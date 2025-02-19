import React from 'react';
import { A11y, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade'; // Import fade effect CSS

function Hero() {
  return (
    <div className='flex flex-row h-full w-1/2 pl-8 py-4'>
      <Swiper
        modules={[A11y, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} 
        effect="fade" // Enables fade transition
        fadeEffect={{ crossFade: true }} // Smooth fade effect
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={false} // Removes dots (set to true if needed)
      >
        {[
          "https://i.ytimg.com/vi/qCcLus0yNSg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBs7tGx9s4VHGdVngFcN_dxo6UdFg",
          "https://www.fabhotels.com/blog/wp-content/uploads/2019/07/Places-to-Visit-in-Lonavala_600.jpg",
          "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/04/15151106/palm-beach-1.jpeg?tr=w-1200,q-60",
          "https://t4.ftcdn.net/jpg/04/61/16/55/360_F_461165548_GEbiE2x642O2Gfwxu7UJ7Mlx6ZG9BB2A.jpg"
        ].map((src, index) => (
          <SwiperSlide key={index}>
            <img className='w-full h-full object-cover' src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
