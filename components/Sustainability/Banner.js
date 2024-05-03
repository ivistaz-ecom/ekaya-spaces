'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import Image from 'next/image'

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
    <div className="h-[70vh] relative mx-auto" data-aos='fade-down'>
       <Image
        src="/sustainability.png"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
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
