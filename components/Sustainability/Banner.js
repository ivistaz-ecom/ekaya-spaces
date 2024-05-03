'use client'
import React, { useEffect} from 'react'
import AOS from "aos";

function Banner() {

  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);


  return (
    <div className="bg-center bg-no-repeat bg-cover bg-[url('/sustainability.png')] bg-gray-300 bg-blend-multiply h-[70vh] relative mx-auto" data-aos='fade-down'>
          <div className='w-[80%] absolute bottom-0 py-12 ml-40' data-aos='fade-down'>
              <h1 className='text-8xl text-white poppins-light'>
              Sustainability
              </h1>
      </div>
      <div className='overflow-hidden z-0'>
      <div class="vertical overflow-hidden"></div>
        <div class="vertical-1 overflow-hidden"></div>
        <div class="vertical-2 overflow-hidden"></div>
        <div class="vertical-3 overflow-hidden"></div>
        </div>
    </div>
  )
}

export default Banner
