'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import ContactBtn from '../common/ContactBtn'
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
    <div className="h-screen relative" data-aos='fade-down'>
      <Image
        src="/Banner.png"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
    
      <ContactBtn/>
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
